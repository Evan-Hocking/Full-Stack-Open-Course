import { useState } from 'react'
import Number from './components/Number'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter] = useState('')

  

  

 
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