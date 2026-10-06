import { useState, useEffect } from 'react'
import countryservice from '../services/countryservice'

const Search = ({ setCountries, setcountrysearch, countrysearch }) => {
  const [allcountries, setAllCountries] = useState([])

  useEffect(() => {
    countryservice
      .getAll()
      .then(countries => {
        setAllCountries(countries)
      })
  }, [])

  const handleSearchChange = (event) => {
    const search = event.target.value

    setcountrysearch(search)

    const filteredCountries = allcountries.filter(country =>
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())
    )

    setCountries(filteredCountries)
  }

  return (
    <p>
      find countries <input
        value={countrysearch}
        onChange={handleSearchChange}
      />
    </p>
  )
}

export default Search