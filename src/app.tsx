import { useEffect, useState } from "react"

function App() {
  const [loading, response] = useFetch('https://api.github.com/users/erickgust')

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>{JSON.stringify(response)}</h1>
    </div>
  )
}

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState<Promise<T> | null>(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch(url)
      const json = await resp.json()

      setLoading(false)
      setResponse(json)
    })()
  }, [url])

  return [loading, response]
}

export { App }
