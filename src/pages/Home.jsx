import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/db.json") // ตรวจสอบเส้นทางให้ถูกต้อง
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data.restaurants);
        setFilteredRestaurants(data.restaurants); // ตั้งค่าเริ่มต้นให้แสดงทั้งหมด
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
      <div className="container mx-auto px-4 py-8">
        <Restaurants restaurants={filteredRestaurants} />
      </div>
    </div>
  );
};

export default Home;
