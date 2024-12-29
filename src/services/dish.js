import { axiosHandler } from "../axios/axios";

export const addDish = async (Dishdata) => {
    try {
        console.log(Dishdata)
        const res = await axiosHandler.post("/admin/add-dish", Dishdata,{
            headers : {"Content-Type" : "multipart/form-data"}
        });
        return res;
    } catch (error) {
        return error;
    }
};