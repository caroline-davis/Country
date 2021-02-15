import React, { useState } from 'react'
import './App.css';
import CountryInput from './CountryInput'

function App() {

  const [searchValue, setSearchValue] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log('hi', searchResult ? searchResult : "")


  return (
    <div className="App">
      <header className="App-header">
        Country Information
      </header>
      <CountryInput setSearchValue={setSearchValue}
        searchValue={searchValue}
        setSearchResult={setSearchResult}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
}

export default App;
