import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
//import { useThemeMode } from "../../hooks/useThemeMode"
import { light, dark } from "../styles/theme"
import useThemeHook from "./useThemeHook"

const ThemeContext: React.FC = ({ children }: any) => {
  const { theme } = useThemeHook()

  const themeMode = theme === "dark" ? dark : light

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default ThemeContext
