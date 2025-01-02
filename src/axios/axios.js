import axios from "axios";
export const axiosHandler = axios.create({
    baseURL : "https://restaurant-d1wxtif2w-faizyis-projects.vercel.app/",
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