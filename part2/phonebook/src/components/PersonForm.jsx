import { useState } from 'react'
import PBService from '../services/phonebookservice'
const PersonForm = ({  persons, setPersons, setMessage, setMessagetype }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        const found = persons.some(person => person.name === newName);
        if (!found) {
            const personObject = {
                name: newName,
                number: newNumber,
            }
            PBService.create(personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                const newMessage = `Added ${returnedPerson.name}`
                setMessage(newMessage)
                setMessagetype('success')
            })
        } else {
            const existingPerson = persons.find(person => person.name === newName);
            const updatedPerson = { ...existingPerson, number: newNumber };
            PBService.update(existingPerson.id, updatedPerson).then(returnedPerson => {
                setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
                setNewName('')
                setNewNumber('')
                const newMessage = `Updated ${returnedPerson.name}`
                setMessage(newMessage)
                setMessagetype('success')
            })
        }
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <h2>add a new</h2>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm