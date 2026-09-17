import { useState, useEffect } from 'react'
import axios from 'axios'
import Number from './components/Number'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('/api/persons')
      .then(response => {
        console.log('promise fulfilled')
        console.log(typeof response.data)
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])




  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <Number key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  )
}

export default App