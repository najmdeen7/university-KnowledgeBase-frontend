import React from 'react';

const ArticleCard = ({ title, description }) => {
  return (
    <div 
      className="bg-[#E6DCC4] p-6 rounded-lg shadow-md border border-gray-200
                 cursor-pointer hover:shadow-xl hover:scale-[1.02] 
                 transition-all duration-200 ease-in-out"
      dir="rtl"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ArticleCard;