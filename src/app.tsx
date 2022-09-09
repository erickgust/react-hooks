import { useCallback, useMemo, useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('')

  const total = useMemo(() => {
    console.log('useMemo')
    return counter * 12323213 * 3231313 * 123233
  }, [counter])

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1)
  }, [])

  return (
    <div>
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button type="button" onClick={handlePlus}>+</button>

      <br />
      <span>{name}</span>
      <br />
      <input type="text" onChange={e => setName(e.target.value)} />
    </div>
  )
}

export {App}