import React from 'react'
import { Modal, Input, Button, Upload,} from 'antd';
import { FiPlus } from 'react-icons/fi';
import { AddDishHook } from '../../CustomHooks/AddDishHook'

export const AddDishModal = ({onClose, visible}) => {
    const {dishName, setDishName, dishDisc, setDishDisc, dishPrice, setDishPrice, imagePreview,
    handleImage, handleAddDish} = AddDishHook();
  return (
    <Modal
    visible={visible}
    title="Add New Dish"
    onCancel={onClose}
    footer={null}
    centered
  >
    {/* Dish Form */}
    <div className="space-y-4">
      {/* Dish Name */}
      <Input
        placeholder="Dish Name"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        size="large"
        className='capitalize'
      />

      {/* Dish Description */}
      <textarea 
      className='capitalize border w-full h-10 border-gray-300 focus:outline-none
       hover:border-blue-500 rounded-lg p-2' 
      placeholder="Dish Description" 
      value={dishDisc} 
      onChange={(e) => setDishDisc(e.target.value)} />

      {/* Dish Price */}
      <Input
        type="number"
        placeholder="Dish Price (SAR)"
        value={dishPrice}
        onChange={(e) => setDishPrice(e.target.value)}
        size="large"
      />

      {/* Dish Image Upload */}
      <div>
        <div className="flex flex-col items-center justify-center border
         border-dashed rounded-lg p-4 cursor-pointer hover:border-yellow-500">
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
            id="dish-image-upload"
          />
          <label htmlFor="dish-image-upload" className="text-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Dish Preview"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-600">
                <FiPlus size={40} className="mb-2" />
                <span>Upload Image</span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>

    {/* Modal Actions */}
    <div className="mt-6 flex justify-end space-x-4">
      <Button onClick={onClose} className="hover:bg-gray-200">
        Cancel
      </Button>
      <Button
        type="primary"
        onClick={handleAddDish}
        className="bg-yellow-500 hover:bg-yellow-600"
      >
        Add Dish
      </Button>
    </div>
  </Modal>
  )
}
