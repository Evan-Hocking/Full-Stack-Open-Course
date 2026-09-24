import { useState, useEffect } from 'react'

import Number from './components/Number'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import PBService from './components/phonebookservice'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    PBService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    },
    [])




  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  const deletePerson = (id) => {
    PBService.deleteperson(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    }) 
  };
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
          <Number key={person.id} name={person.name} number={person.number} deletePerson={deletePerson} id={person.id} />
        ))}
      </ul>
    </div>
  )
}

export default App