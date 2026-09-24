const Number = (props) => {

  return (
    <div>
      <p>{props.name} {props.number}</p>
      <button onClick={() => props.deletePerson(props.id)}>delete</button>
    </div>
  )
}

export default Number