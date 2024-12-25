import { axiosHandler } from "../axios/axios";
export const login = async(data)=>{
    try {
        const res = await axiosHandler.post("/admin/login", data);
        return res
    } catch (error) {
        return error
    }
}