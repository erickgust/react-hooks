import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const handlePlus = () => setCounter((counter) => counter + 1)
  const handleMinus = () => setCounter((counter) => counter - 1)
  const plusThree = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button type="button" onClick={handleMinus}>-</button>
      <button type="button" onClick={handlePlus}>+</button>
      <button type="button" onClick={plusThree}>+++</button>
    </>
  )
}

export { App }
