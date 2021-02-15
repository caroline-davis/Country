import { BASE_URL, NAME_URL } from "./Constants"


function wrangleData(results) {

    return results.map(result => ({
        "name": result.name,
        "capital": result.capital,
        "languages": result.languages.map(language => language.name),
        "currency": result.currencies.map(currency => ({ [currency.name]: currency.symbol }))
    }))
}

export async function getCountryApi(value) {
    const url = `${BASE_URL}${NAME_URL}${value}`
    const response = await fetch(url)
    const json = await response.json()
    return wrangleData(json)
}
