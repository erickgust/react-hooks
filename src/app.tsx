import { useReducer } from "react"

type Action = {
  type: 'INCREMENT' | 'DECREMENT'
}

function reducer(state: State, action: Action) {
  switch (action.type.toUpperCase()) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1
      }

    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1
      }

    default:
      return state
  }
}

type State = typeof initialValue

const initialValue = {
  clicks: 0,
  counter: 0
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)

  function handlePlus() {
    dispatch({ type: "INCREMENT" })
  }

  function handleMinus() {
    dispatch({ type: "DECREMENT" })
  }

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      <h4>Cliques: {state.clicks}</h4>
      <button type="button" onClick={handleMinus}>-</button>
      <button type="button" onClick={handlePlus}>+</button>
    </div>
  )
}

export { App }
