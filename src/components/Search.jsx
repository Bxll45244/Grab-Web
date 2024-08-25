import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [term, setTerm] = useState("");

  const onSearch = () => {
    handleSearch(term);
  };

  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
      <button
        onClick={onSearch}
        className="bg-black text-white px-4 py-2 rounded-lg" // เปลี่ยนเป็นสีดำ
      >
        Search
      </button>
    </div>
  );
};

export default Search;