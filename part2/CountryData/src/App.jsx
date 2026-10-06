import { useState } from 'react'
import Search from './components/Search'
import Result from './components/Result'

function App() {
  const [countries, setCountries] = useState([])
  const [countrysearch, setcountrysearch] = useState("")

  return (
    <>
      <Search setCountries={setCountries} setcountrysearch={setcountrysearch} countrysearch={countrysearch}/>
      <Result countries = {countries}  setcountrysearch={setcountrysearch}setCountries={setCountries}/>
    </>
  )
}

export default App
