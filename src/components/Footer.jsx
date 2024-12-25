import React from 'react';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export const Footer = () => {
  return (
    <footer id='contact' className="bg-gray-800 text-white py-10 mt-auto">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Restaurant</h3>
            <p className="text-gray-400 text-sm">
              Crafting culinary experiences since 2024.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <PhoneOutlined className="h-5 w-5 mr-2" />
              (123) 456-7890
            </p>
            <p className="flex items-center text-gray-400">
              <EnvironmentOutlined className="h-5 w-5 mr-2" />
              123 Gourmet Lane, Foodville, USA
            </p>
          </div>

          {/* Hours Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Our Hours</h3>
            <p className="text-gray-400 text-sm">Mon - Fri: 11:00 AM - 10:00 PM</p>
            <p className="text-gray-400 text-sm">Sat - Sun: 11:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
