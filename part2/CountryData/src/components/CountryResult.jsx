import countryservice from '../services/countryservice'

const CountryResult = (props) => {
    const handleButtonClick = () => {
        const search = props.name
        props.setcountrysearch(search)

        countryservice
            .getCountry(search)
            .then(country => {
                props.setCountries([country])
            })

    }
    return (
            <p>
                {props.name} <button onClick={handleButtonClick}>
                    Show
                </button>
            </p>
    )
}

export default CountryResult