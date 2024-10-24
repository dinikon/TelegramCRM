// src/core/interceptors/AuthInterceptor.ts
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";

// let isRefreshing = false;
// let failedQueue: any[] = [];
//
// const processQueue = (error: any, token: string | null = null) => {
//     failedQueue.forEach((prom) => {
//         if (token) {
//             prom.resolve(token);
//         } else {
//             prom.reject(error);
//         }
//     });
//     failedQueue = [];
// };

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
        function (error) {
            if (error.response && error.response.status === 401) {
                console.log("Response Error 401: ", error);
                router.push({ name: 'user' })
            }
            console.log("Response Error: ", error);
            return Promise.reject(error);
        }
    );
};

export default setupAuthInterceptor;
