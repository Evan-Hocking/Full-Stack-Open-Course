import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button value={good} setValue={setGood} text="good" />
      <Button value={neutral} setValue={setNeutral} text="neutral" />
      <Button value={bad} setValue={setBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />      
    </>
  )
}

export default App