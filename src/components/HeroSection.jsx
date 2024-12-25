import React from 'react';
import heroImage from '../../src/assets/Images/hero.jpg';
export const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px]">
    {/* Background Image */}
    <img
      src={heroImage}
      alt="Delicious food spread"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Black Overlay for Better Text Visibility */}
    <div className="absolute inset-0 bg-black opacity-60"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-center drop-shadow-lg">
        Savor the Extraordinary
      </h1>
      <p className="text-lg md:text-2xl mb-10 max-w-3xl text-center drop-shadow-md">
        Indulge in a world of culinary delights crafted to perfection and delivered right to your table.
      </p>
      <a href="#menu">
      <button  className="bg-yellow-500 text-gray-900 
      font-semibold py-3 px-10 rounded-full hover:bg-yellow-400 transition duration-300 
      transform hover:scale-110 shadow-lg">
        Menu
      </button>
      </a>
    </div>
  </section>
  );
};
