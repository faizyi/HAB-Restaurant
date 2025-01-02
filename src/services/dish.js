import { axiosHandler } from "../axios/axios";

export const addDish = async (Dishdata) => {
    try {
        const res = await axiosHandler.post("/admin/add-dish", Dishdata); // No need for headers here
        return res;
    } catch (error) {
        console.error("Error uploading dish data:", error);
        return error;
    }
};

export const getAllDishes = async () => {
    try {
        const res = await axiosHandler.get("/admin/get-dishes");
        return res;
    } catch (error) {
        console.error("Error fetching dishes:", error);
        return error;
    }
};