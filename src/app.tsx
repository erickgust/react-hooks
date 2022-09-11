import { forwardRef, useImperativeHandle, useRef } from "react"

function App() {
  const formRef = useRef<FormHandle | null>(null)

  function handleSubmit() {
    console.log(formRef)
    formRef.current?.submit
  }

  return (
    <div>
      <Form ref={formRef} />
      <button onClick={handleSubmit} type="button">Submit</button>
    </div>
  )
}

type FormHandle = {
  submit: () => void
}

const Form = forwardRef<FormHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit() {
    console.log(inputRef)
    alert(inputRef.current?.value)
  }

  useImperativeHandle(
    ref,
    () => ({
      submit: handleSubmit
    }),
    []
  )

  return (
    <form>
      <input type="text" ref={inputRef} />
    </form>
  )
})

export { App }