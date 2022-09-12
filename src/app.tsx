import { useLayoutEffect, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)

  useLayoutEffect(() => {
    for (let i = 0; i < 5000; i++) {
      console.log(i)
    }
  }, [counter])

  function handlePlus() {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={handlePlus}>+</button>
    </div>
  )
}

export { App }