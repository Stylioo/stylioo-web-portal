import axios from "axios"

// const baseURL = "https://stylioo-api-e55c1372a17b.herokuapp.com"
const baseURL = "http://localhost:5400"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",

    },
})

export default axiosInstance