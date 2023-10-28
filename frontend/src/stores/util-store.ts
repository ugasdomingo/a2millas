//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

//Define store
export const useUtilStore = defineStore('util', () => {
    const showAlert = ref(false);
    const showModal = ref(0);
    const alertMessage = ref('');
    const alertType = ref('');

    const displayAlert = (message: string, type: string) => {
        showAlert.value = true;
        alertMessage.value = message;
        alertType.value = type;

        setTimeout(() => {
            showAlert.value = false;
        }, 3000);
    };

    return {
        showAlert,
        showModal,
        alertMessage,
        alertType,
        displayAlert
    };
});
