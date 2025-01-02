import React, { useState } from 'react'
import { addDish } from '../services/dish';

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
    
        const formData = new FormData();
        formData.append("dishName", dishName);
        formData.append("dishDisc", dishDisc);
        formData.append("dishPrice", dishPrice);
        formData.append("dishImage", dishImage); // This key must match 'upload.single("dishImage")'
    
        // Debug: Log the FormData
        // for (let pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        // }
    
        // try {
            const result = await addDish(formData);
            console.log(result)
        //     console.log("Result:", result);
        // } catch (error) {
        //     console.error("Error adding dish:", error);
        // }
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
