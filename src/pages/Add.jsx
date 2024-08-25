// src/pages/Add.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });

      if (response.ok) {
        navigate("/"); // นำทางกลับไปที่หน้า Home หลังจากเพิ่มร้านอาหาร
      } else {
        console.log("Error adding restaurant.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Add Restaurant</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Name"
            name="name"
            onChange={handleChange}
            value={restaurant.name}
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Type</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Type"
            name="type"
            onChange={handleChange}
            value={restaurant.type}
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Restaurant Image URL</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Restaurant Image URL"
            name="img"
            onChange={handleChange}
            value={restaurant.img}
          />
        </div>
        {restaurant.img && (
          <div className="flex items-center gap-2">
            <img src={restaurant.img} className="h-32" alt="Restaurant" />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default Add;
