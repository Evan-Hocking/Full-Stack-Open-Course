const Notification = ({ message, messagetype }) => {
  if (message === null) {
    return null
  }

  return <div className={`notification ${messagetype}`}>{message}</div>
}

export default Notification