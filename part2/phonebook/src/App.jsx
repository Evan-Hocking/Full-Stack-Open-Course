import { useState, useEffect } from 'react'

import Number from './components/Number'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PBService from './services/phonebookservice'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messagetype, setMessagetype] = useState(null)

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
      <Notification message={message} messagetype={messagetype} />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setMessagetype={setMessagetype}
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