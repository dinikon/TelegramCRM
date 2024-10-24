// src/core/interceptors/AuthInterceptor.ts
import axios from "axios";
import ApiService from "@/core/services/ApiService";
import { useAuthStore } from "@/stores/auth";

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });
    failedQueue = [];
};

const setupAuthInterceptor = () => {
    const authStore = useAuthStore();

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
        function (error) {
            if (error.response && error.response.status === 401) {
                console.log("Response Error 401: ", error);
                const authStore = useAuthStore();
                authStore.verifyAuth();
            }
            console.log("Response Error: ", error);
            return Promise.reject(error);
        }
    );
};

export default setupAuthInterceptor;
