import { useEffect, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const handlePlus = () => setCounter((counter) => counter + 1)
  const handleMinus = () => setCounter((counter) => counter - 1)
  const plusThree = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  useEffect(() => {
    console.log('first render')

    return () => console.log('unmount')
  }, [])

  useEffect(() => {
    console.log('counter')
  }, [counter])

  useEffect(() => {
    console.log('name')
  }, [name])

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={handleMinus}>-</button>
      <button type="button" onClick={handlePlus}>+</button>
      <button type="button" onClick={plusThree}>+++</button>

      <div>
        <span>{name}</span>
        <br />
        <input onChange={e => setName(e.target.value)} />
      </div>
    </>
  )
}

export { App }
