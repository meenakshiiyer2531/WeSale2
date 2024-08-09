// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img 
        src={product.images || 'https://via.placeholder.com/300'} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#91a5b7]">{product.price}</span>
          <button className="px-4 py-2 bg-[#91a5b7] text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
