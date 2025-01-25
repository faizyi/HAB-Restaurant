import React, { useState } from 'react';
import { AdminActions } from './AdminActions';
import { GetAllDishesHooks } from '../CustomHooks/GetAllDishesHooks';
import { AddDishHook } from '../CustomHooks/AddDishHook';

export const MenuItems = () => {
  const { dishes, setDishes } = GetAllDishesHooks(); // Fetch all dishes
  const [searchTerm, setSearchTerm] = useState("");

  // const addDishToState = (newDish)=>{
  //   setDishes((prevDishes)=> [newDish, ...prevDishes])
  // }
  // AddDishHook(addDishToState)

  // Filtered menu based on search term
  const filteredMenu = dishes.filter((item) =>
    item.dishName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Menu
        </h2>

        {/* Search Bar */}
        <div className="mb-12 text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a dish..."
            className="px-4 py-2 w-full sm:w-1/2 border rounded-lg shadow-sm focus:outline-none 
            border-yellow-500"
          />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden 
                transform transition duration-300 hover:scale-105 relative"
              >
                {/* Menu Item Image */}
                <img
                  src={`${item.dishImage}`} // Construct full image URL
                  // alt={item.dishName}
                  className="w-full h-52 object-cover rounded-t-xl"
                />

                {/* Menu Item Details */}
                <div className="p-6">
                  <h3 className="capitalize text-2xl font-bold text-gray-800 mb-2">
                    {item.dishName}
                  </h3>
                  <p className="capitalize text-gray-600 mb-4">{item.dishDisc}</p> {/* Add description */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-500">
                      SAR {item.dishPrice}
                    </span>
                    <AdminActions id={item.id} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No menu items match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
