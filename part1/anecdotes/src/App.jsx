import { useState } from 'react'
const NextBtn = (props) => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * props.anecdotes.length)
    props.setSelected(randomIndex)
  }

  return (
    <button onClick={handleClick}>Next Anecdote</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      {props.anecdote}
      <br/>
      has {props.votes} votes
    </div>
  )
}

const VoteBtn = (props) => {
  const handleClick = () => {
    const newVotes = [...props.votes]
    newVotes[props.selected] += 1
    props.setVotes(newVotes)
  }

  return (
    <button onClick={handleClick}>Vote</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
   
  const [selected, setSelected] = useState(0)
  const mostVotesIndex = votes.indexOf(Math.max(...votes))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <br />
      <VoteBtn votes={votes} selected={selected} setVotes={setVotes} />
      <NextBtn anecdotes={anecdotes} setSelected={setSelected} /> 

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVotesIndex]} votes={votes[mostVotesIndex]} />     
    </div>
  )
}

export default App