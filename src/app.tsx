import { useCallback, useState } from "react"

const fnCounter = new Set()

function App() {
  const [counter, setCounter] = useState(0)

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1)
  }, [])

  fnCounter.add(handlePlus)
  console.log(fnCounter.size)

  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={handlePlus}/>
    </div>
  )
}

type ButtonProps = {
  onClick: () => void
}

const Button = ({ onClick }: ButtonProps) => (
  <button type="button" onClick={onClick}>+</button>
)

export {App}