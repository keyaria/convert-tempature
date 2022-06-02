import "./App.css"
import { ThemeProvider } from "styled-components"
import ToggleButtonTheme from "./components/ToggleButtonTheme/ToggleButtonTheme"
import GlobalStyle from "./styles/global"
import { light, dark } from "./styles/theme"
import useThemeHook from "./contexts/useThemeHook"
import HomePage from "./features/Home/pages/HomePage/HomePage"

function App() {
  const { theme, themeToggler } = useThemeHook()
  const themeMode = theme === "light" ? light : dark

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <ToggleButtonTheme themeToggler={themeToggler} />
        </header>
        <HomePage />
      </div>
    </ThemeProvider>
  )
}

export default App
