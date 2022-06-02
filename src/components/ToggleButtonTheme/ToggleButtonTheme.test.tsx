import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ToggleButtonTheme from "./ToggleButtonTheme"
import useThemeHook from "../../contexts/useThemeHook"
const { theme, themeToggler } = useThemeHook()

describe("<ToggleButtonTheme />", () => {
  test("it should mount", () => {
    render(<ToggleButtonTheme themeToggler={themeToggler} />)

    const componentsToggleButtonThemeToggleButtonTheme = screen.getByTestId("ToggleButtonTheme")

    expect(componentsToggleButtonThemeToggleButtonTheme).toBeInTheDocument()
  })
})
