import { useDebugValue, useEffect, useState } from "react"

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

type ResponseType = {
  json: Promise<unknown>
  status: number
}

function useFetch(url: string) {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState<ResponseType | null>(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch(url)
      const json = await resp.json()

      setLoading(false)
      setResponse({ json, status: resp.status })
    })()
  }, [url])

  useDebugValue(response?.status, (message) => {
    return `Status: ${message}`
  })

  return [loading, response?.json]
}

export { App }
