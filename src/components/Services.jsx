import React from 'react';
import { UserOutlined, StarOutlined } from '@ant-design/icons'; // Importing Ant Design Icons

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>

        {/* Service Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Service Icon and Description */}
          <div className="flex items-center space-x-4">
            <UserOutlined className="h-16 w-16 text-yellow-500" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Exceptional Dine-In Experience
              </h3>
              <p className="text-gray-600">
                Enjoy a world-class dining experience at our restaurant. From cozy
                ambiance to expertly crafted dishes, we ensure every visit leaves you
                with unforgettable memories.
              </p>
            </div>
          </div>

          {/* Highlight: Fresh Ingredients */}
          <div className="flex items-center space-x-4">
            <StarOutlined className="h-16 w-16 text-yellow-500" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Fresh Ingredients, Expert Chefs
              </h3>
              <p className="text-gray-600">
                Our meals are prepared using the freshest ingredients and cooked by
                professional chefs who prioritize quality and flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
