import React from 'react';

export const MapLocation = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Location</h2>
      <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2891.867956914799!2d45.968875999999995!3d28.430809999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI1JzUwLjkiTiA0NcKwNTgnMDguMCJF!5e1!3m2!1sen!2ssa!4v1735135212395!5m2!1sen!2ssa" 
          width="100%" 
          height="450" 
          className="border-0"
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
