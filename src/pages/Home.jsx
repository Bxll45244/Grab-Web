import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants);
        setFilteredRestaurants(data.restaurants);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Search handleSearch={handleSearch} />
      
      <div className="fixed top-4 right-4 space-x-2">
        <Link to="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            Add Restaurant
          </button>
        </Link>
        <Restaurants restaurants={filteredRestaurants} />
      </div>
    </div>
  );
};

export default Home;
