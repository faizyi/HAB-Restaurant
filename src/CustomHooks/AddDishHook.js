import React, { useState } from "react";
import { addDish } from "../services/dish";
import { message } from "antd";

export const AddDishHook = (onClose) => {
  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Dish details state
  const [dishName, setDishName] = useState("");
  const [dishDisc, setDishDisc] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishImage, setDishImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Handle image upload and preview
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDishImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show a preview of the image
    }
  };

  // Handle adding a new dish
  const handleAddDish = async () => {
    if (!dishName || !dishDisc || !dishPrice || !dishImage) {
      message.error("Please fill all the fields");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result; // Convert the image to Base64 format

      const dishData = {
        dishName,
        dishDisc,
        dishPrice,
        dishImage: base64Image, // Include the encoded image
      };

      try {
        const result = await addDish(dishData); // Send the dish data to the server
        console.log("Result:", result);
        message.success("Dish added successfully!");
        // addDishToState(result.data.dish)
        onClose(); // Close the modal after successful submission
      } catch (error) {
        console.error("Error adding dish:", error);
        message.error("Failed to add dish. Please try again.");
      }
    };

    reader.readAsDataURL(dishImage); // Read the uploaded file as Base64
  };

  // Return states and handlers for use in components
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
    handleCloseModal,
  };
};
