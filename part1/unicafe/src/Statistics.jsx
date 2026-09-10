import StatisticsLine from './StatisticsLine'

const Statistics  = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total > 0 ? (props.good * 1 + props.neutral * 0 + props.bad * -1) / total : 0
  const positivePercentage = total > 0 ? (props.good / total) * 100 : 0
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={average.toFixed(1)} />
          <StatisticsLine text="positive" value={`${positivePercentage.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics 