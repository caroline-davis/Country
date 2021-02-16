import React from 'react'

export default function Info(searchResult) {

    let currency = searchResult.searchResult.currency[0]
    let wordCurrency = ''
    let wordAndSymbolCurrency = ''

    function getData() {
        for (let [key, value] of Object.entries(currency)) {
            wordCurrency = key
            wordAndSymbolCurrency = key + ' - ' + value
        }
        return (wordCurrency, wordAndSymbolCurrency)
    }

    return (
        <>
            <div>Country Name: {searchResult.searchResult.name}</div>
            <div>Capital: {searchResult.searchResult.capital}</div>
            <div>{searchResult.searchResult.languages.length > 0 ? `Languages` : `Language`}: {searchResult.searchResult.languages.join(', ')}</div>
            <div>Currency: {getData()}</div>

        </>
    )
}