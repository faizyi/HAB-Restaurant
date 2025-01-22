import React, { useState } from 'react'
import { addDish } from '../services/dish';
import { message } from "antd";
export const AddDishHook = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const [dishName, setDishName] = useState("");
    const [dishDisc, setDishDisc] = useState("");
    const [dishPrice, setDishPrice] = useState('');
    const [dishImage, setDishImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImage = (e) =>{
        const file = e.target.files[0];
        if(file){
            setDishImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }
    const handleAddDish = async () => {
        if (!dishName || !dishDisc || !dishPrice || !dishImage){
            alert("Please fill all the fields");
            return;
        }
        const dishData ={
            dishName: dishName,
            dishDisc: dishDisc,
            dishPrice: dishPrice,
            dishImage: dishImage
        }
        try {
            const result = await addDish(dishData);
            if(result.status === 201){
                message.success(result.data.msg);
            }
        } catch (error) {
            console.error("Error adding dish:", error);
        }
    };
  return {
    dishName,
    setDishName,
    dishDisc,
    setDishDisc,
    dishPrice,
    setDishPrice,
    imagePreview,
    setImagePreview,
    handleImage,
    handleAddDish,
    isModalOpen,
    handleOpenModal,
    handleCloseModal
  }
}
