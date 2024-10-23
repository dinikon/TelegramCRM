import { defineStore } from "pinia";
import { reactive } from "vue";
import ApiService from "@/core/services/ApiService.ts";

// Интерфейс для пользователя
export interface Customer {
    lastName: string | null;
    middleName: string | null;
    firstName: string | null;
    status: number;
}

// Store для работы с данными пользователя
export const useCustomerStore = defineStore("customer", () => {
    // Реактивное состояние для хранения данных о клиенте
    const customer = reactive<Customer>({
        lastName: null,
        middleName: null,
        firstName: null,
        status: 0,
    });

    // Метод для получения информации о текущем пользователе
    async function me() {
        try {
            const { data } = await ApiService.get("api/v1/customer/me");
            console.log("API Response:", data); // Отладка ответа API

            // Обновляем объект customer данными из API
            customer.firstName = data.first_name;
            customer.middleName = data.middle_name;
            customer.lastName = data.last_name;
            customer.status = data.status;

            console.log("Обновленный customer:", customer); // Отладка обновления
        } catch (error) {
            console.error("Ошибка при запросе данных пользователя:", error);
        }
    }

    return {
        customer,
        me,
    };
});
