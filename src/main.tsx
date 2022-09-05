import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'

const rootElement = document.querySelector<HTMLDivElement>('[data-js="root"]')

if (rootElement === null) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
