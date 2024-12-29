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
    const handleAddDish = async ()=>{
        // if(!dishName || !dishPrice || !dishImage){
        //     alert("Please fill all the fields");
        //     return;
        // }
        const DishData = {
            dishName,
            dishDisc,
            dishPrice,
            dishImage
        }
        const result = await addDish(DishData);
        console.log(result)
        // if(result.status === 200){
        //     alert("Dish added successfully");
        //     handleCloseModal();
        //     setDishName("");
        //     setDishDisc("");
        //     setDishPrice('');
        //     setDishImage(null);
        //     setImagePreview('');
        // }
    }
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
