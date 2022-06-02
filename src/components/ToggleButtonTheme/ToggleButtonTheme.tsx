import React, { FC } from "react"
//import './ToggleButtonTheme.ts';
import { Button } from "./ToggleButtonThemeStyle"
interface ToggleButtonThemeProps {
  themeToggler: () => void
}

const ToggleButtonTheme: FC<ToggleButtonThemeProps> = ({ themeToggler }) => (
  <div className="ToggleButtonTheme" data-testid="ToggleButtonTheme">
    <Button onClick={themeToggler}>Switch</Button>
  </div>
)

export default ToggleButtonTheme
