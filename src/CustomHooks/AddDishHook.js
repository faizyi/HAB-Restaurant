import React, { useState } from 'react'

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
    const handleAddDish = ()=>{
        if(!dishName || !dishPrice || !dishImage){
            alert("Please fill all the fields");
            return;
        }
        const formData = new FormData();
        formData.append('name', dishName);
        formData.append('description', dishDisc);
        formData.append('price', dishPrice);
        formData.append('image', dishImage);
        console.log(dishImage.name);
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
