import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [address, setAddress] = useState('');

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(address);
    console.log("address",address);
  };

  return (
    <div>
      <input type="text" value={address} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;