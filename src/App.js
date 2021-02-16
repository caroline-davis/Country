import React, { useState } from 'react'
import './App.css';
import CountryInput from './CountryInput'
import Info from './Info'

function App() {

  const [searchValue, setSearchValue] = useState(null)
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
      <div>
        {loading && !error &&
          `Loading...`}
        {!loading && error &&
          `Something went wrong, please try again`}
        {searchResult && !loading && !error &&
          <Info searchResult={searchResult} />}
      </div>
    </div>
  );
}

export default App;
