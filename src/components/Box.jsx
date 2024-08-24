import React from "react";

const Box = ({ restaurant }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={restaurant.image || "/default-image.jpg"} // ตรวจสอบให้แน่ใจว่ามีการจัดการรูปภาพ
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{restaurant.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{restaurant.type}</p>
        <p className="text-gray-800">{restaurant.description}</p>
      </div>
    </div>
  );
};

export default Box;
