import { axiosHandler } from "../axios/axios";
export const login = async(data)=>{
    console.log(data)
    try {
        const res = await axiosHandler.post("/admin/login", data,{
            headers : {"Content-Type" : "application/json"},
        });
        return res
    } catch (error) {
        return error
    }
}