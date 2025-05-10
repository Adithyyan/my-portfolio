import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import config from '../../config.js';
import axios from 'axios';

const PREFIX = 'sv_1_';

function useLocalStorageCustom(key, defaultValue) {
    return useLocalStorage(`${PREFIX}${key}`, defaultValue);
}

export const mainStore = defineStore('mainStore', () => {
    let toastMsg = ref({});
    let token = ref(useLocalStorageCustom('token', ''));
    let user = ref(useLocalStorageCustom('user', {}));

    const http = axios.create({
        baseURL: config.baseUrl,
    });

    function removeToast() {
        toastMsg.value = {};
    }

    function toast(msg, type) {
        console.log('toast index.js:', toastMsg.value);
        toastMsg.value = { msg, type };
        setTimeout(() => {
            toastMsg.value = {};
        }, 2000);
    }

    function setToken(val) {
        token.value = val;
    }

    function saveUser(val) {
        user.value = val;
    }

    function clearAll() {
        user.value = {};
        token.value = '';
    }

    return {
        toastMsg,
        token,
        user,
        http,

        toast,
        removeToast,
        setToken,
        saveUser,
        clearAll,
    };
});