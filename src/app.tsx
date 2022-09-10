import { useRef } from "react"

function App() {
  console.log('App render')

  const inputRef = useRef<HTMLInputElement | null>(null)

  function handlePrintName() {
    if (!inputRef.current) return
    alert(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handlePrintName}>Print name</button>
    </div>
  )
}

export {App}