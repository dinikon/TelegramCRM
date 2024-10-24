// src/core/interceptors/AuthInterceptor.ts
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";
import apiService from "@/core/services/ApiService.ts";
import ApiService from "@/core/services/ApiService.ts";


const setupAuthInterceptor = () => {

    // Интерсептор запросов
    axios.interceptors.request.use(
        (config) => {
            console.log("Request Interceptor:", config);
            return config;
        },
        (error) => {
            console.log("Request Error Interceptor:", error);
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        function (response) {
            console.log("Response Interceptor: ", response);
            return response;
        },
        async function (error) {
            if (error.response && error.response.status === 401 && !error.config._retry) {
                console.log("Response Error 401: ", error);

                const authStore = useAuthStore();
                error.config._retry = true;

                try {
                    // Пытаемся обновить токен
                    const { data } = await ApiService.post("api/v1/auth/refresh", {});
                    authStore.setAuth(data); // Обновляем токен в сторе
                    ApiService.setHeader();  // Обновляем заголовок с новым токеном

                    // Повторяем оригинальный запрос с новым токеном
                    error.config.headers["Authorization"] = `Bearer ${data.access_token}`;
                    return axios(error.config); // Выполняем оригинальный запрос
                } catch (refreshError) {
                    // Если ошибка при обновлении токена, очищаем аутентификацию и перенаправляем на авторизацию
                    authStore.purgeAuth();
                    router.push({ name: "sign-in" });
                    return Promise.reject(refreshError);
                }
            }
            console.log("Response Error: ", error);
            return Promise.reject(error);
        }
    );
};

export default setupAuthInterceptor;
