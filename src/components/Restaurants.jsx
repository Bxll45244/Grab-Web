import React from "react";
import Box from "./Box";

const Restaurants = ({ restaurants }) => {
  if (!restaurants.length) {
    return <p className="text-center text-gray-500">No restaurants found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {restaurants.map((restaurant) => (
        <Box key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
