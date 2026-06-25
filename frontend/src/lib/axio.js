import axios from "axios";


const BASE_URL = import.meta.env.MODE === "development" ? "https://thoughtboard-3.onrender.com/api" : "/api";


const api = axios.create({
    baseURL: BASE_URL,
});


export default api;
