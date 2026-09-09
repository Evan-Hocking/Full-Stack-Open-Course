import Part from "./Part.jsx"
const Content = (props) => {

    return (
        <>
            {props.parts.map((part) => (
                <Part key={part.name} part={part.name} exercise={part.exercises} />
            ))}
        </>
    )
}

export default Content