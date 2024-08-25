// src/components/Restaurants.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Restaurants = ({ restaurants }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="relative border rounded-lg p-4 bg-white shadow-md">
          {restaurant.image ? (
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}
          <h2 className="text-lg font-bold mt-4">{restaurant.name}</h2>
          <p className="text-gray-600">{restaurant.description}</p>
          <div className="absolute top-4 left-4">
            <Link to={`/edit/${restaurant.id}`}>
              <button className="bg-black text-white px-4 py-2 rounded opacity-70 hover:opacity-100 transition-opacity duration-300">
                Edit
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
