import React from 'react';
import { Drawer } from 'antd';

export const MenuDrawer = ({ isDrawerOpen, handleDrawerClose, path, navigate }) => {
  return (
    <Drawer
      title={null}
      placement="right"
      onClose={handleDrawerClose}
      open={isDrawerOpen}
      className="custom-drawer"
    >
      <div className="flex flex-col items-center py-6">
        {/* Drawer Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">🍽️ Restaurant</h2>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-6 w-full text-center">
          {/* Always show Home and Menu */}
          <a
            onClick={() => {
              navigate('/');
              handleDrawerClose();
            }}
            className={`block text-lg font-semibold text-gray-800
               hover:text-yellow-500 transition duration-300 ${
              path === '/' ? 'text-yellow-500' : ''
            }`}
          >
            Home
          </a>
          {/* Login Button */}
          <button
            onClick={() => {navigate('/login'); handleDrawerClose();}}
            className={`block w-full text-lg font-semibold bg-yellow-500 text-black
              py-2 px-4 border border-transparent rounded-lg transition-all duration-300
               hover:bg-yellow-500`}
          >
            Login
          </button>
        </nav>
      </div>
    </Drawer>
  );
};
