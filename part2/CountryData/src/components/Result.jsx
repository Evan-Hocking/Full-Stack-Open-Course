import CountryResult from './CountryResult'
import Country from './Country'


const Result = ({ countries, setcountrysearch, setCountries }) => {


    if (countries.length === 0) {
        return (
            <p>No Results</p>
        )
    } else if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    } else if (countries.length <= 10) {
        return (
            countries.map((country) => (
                <CountryResult key={country.name.common} name={country.name.common} setcountrysearch={setcountrysearch} setCountries={setCountries} />
            ))
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
}

export default Result