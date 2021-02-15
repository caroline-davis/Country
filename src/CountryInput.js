import React from 'react'
import { getCountryApi } from './Api'

export default function CountryInput({ setSearchValue, searchValue, setSearchResult, setLoading, setError }) {

    async function callGetCountry() {

        if (searchValue) {
            setLoading(true)
            setError(false)
        }
        try {
            const result = await getCountryApi(searchValue)
            setSearchResult(result)
            setLoading(false)
            setError(false)
        } catch {
            setLoading(false)
            setSearchResult(null)
            setError(true)
        }
    }

    const handleKeypress = e => {
        if (e.key === "Enter") {
            callGetCountry()
        }
    };

    return (
        <>
            <input type='text'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleKeypress}>
            </input >
            <button onClick={() => callGetCountry()}>Submit</button>
        </>
    )
}