
const Greeting = () => {
    const name = 'John'
    const date = new Date()
    return (
    <div>
        <h1>Hello {name}</h1>
        <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting