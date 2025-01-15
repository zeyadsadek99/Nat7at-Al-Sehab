import axios from "axios";

export default defineNuxtPlugin(async ({ $i18n, $config }) => {
    const i18n: any = $i18n
    let api = axios.create({
        baseURL: $config.public.baseURL,
        headers: {
            common: {
                "Accept-Language": i18n.locale.value,

            }
        },

    });

    api.interceptors.request.use(
        function (config) {
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
    api.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );



    return {
        provide: {
            axios: api,
            axiosToken: axios,
        }
    }
})