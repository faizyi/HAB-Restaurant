import axios from "axios";
export const axiosHandler = axios.create({
    baseURL : "https://restaurant-35b6g5boo-faizyis-projects.vercel.app",
    // headers : {"Content-Type" : "application/json"},
    withCredentials : true
})

axiosHandler.interceptors.request.use(
    (config)=>{
        return (config);
    },
    (error)=>{
        return Promise.reject(error)
    }
)
axiosHandler.interceptors.response.use(
    (response)=>{
        return (response);
    },
    (error)=>{
        return Promise.reject(error)
    }
)