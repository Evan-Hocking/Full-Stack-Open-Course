const Button = (props) => {
  const handleClick = () => {
    props.setValue(props.value + 1)
  }  
  return (
    <button onClick={handleClick}>
      {props.text}
    </button>
  ) 
}
export default Button