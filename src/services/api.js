import axios from "axios"

export const api = axios.create({
    baseURL: "https://food-explorer-backend-v2.onrender.com", withCredentials: true
})