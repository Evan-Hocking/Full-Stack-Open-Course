import { useState } from 'react'
const PersonForm = ({  persons, setPersons, }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        const found = persons.some(person => person.name === newName);
        if (!found) {
            const personObject = {
                name: newName,
                number: newNumber,
                id: crypto.randomUUID(),
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} is already added to the phonebook`)
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