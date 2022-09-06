import { createContext, ReactNode, useContext } from "react"

type ThemeContextType = {
  mode: 'dark' | 'light'
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function ThemeContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <ThemeContext.Provider value={{ mode: 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new Error('You must wrap your component with <ThemeContextProvider />')
  }

  return theme
}

function App() {
  return (
    <ThemeContextProvider>
      <Button />
    </ThemeContextProvider>
  )
}

function Button() {
  const theme = useTheme()

  return (
    <button type="button">{theme.mode}</button>
  )
}

export { App }
