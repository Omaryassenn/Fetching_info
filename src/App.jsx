import React, { useState } from 'react';
import playerDataArabic from './playerDataArabic.json'; // Import your Arabic JSON data
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = Object.entries(playerDataArabic).filter(([key, value]) => {
      if (typeof value === 'object') {
        return Object.values(value).some(val => String(val).includes(searchQuery));
      }
      return String(value).includes(searchQuery);
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="App">
      <div className='srch'>
        <input
          type="text"
          placeholder="البحث بإسم اللاعب"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>بحث</button>
      </div>
      <div className='info'>
        {searchResults.map(([key, value]) => (
          <div key={key}>
            {typeof value === 'object' ? (
              Object.entries(value).map(([subKey, subValue]) => (
                <p key={subKey}>{subKey}: {subValue}</p>
              ))
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
