import Sum from './tools.js'

const Total = (props) => {
    const exercises = props.parts.map(value => value.exercises)

    return (
        <>
        <p>Number of exercises {Sum(exercises)}</p>
        </>
    )
}

export default Total
