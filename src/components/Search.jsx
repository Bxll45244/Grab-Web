import React, { useState } from 'react';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <label htmlFor="search-input" className="sr-only">Search for restaurants</label>
      <input
        type="text"
        id="search-input"
        name="search"
        placeholder="Search for restaurants..."
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        value={search}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
