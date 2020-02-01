import axios from "axios";
import store from "./../store";

const LocalApi = axios.create({
    baseURL: "http://localhost:3000"
});

LocalApi.interceptors.request.use(function(config) {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }

    return config;
})

export default LocalApi;