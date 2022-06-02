import React, { FC, useState } from "react"
import { Input, Select } from "./ConversionForm.style"
import "./ConversionForm.style.ts"

interface ConversionFormProps {}

const ConversionForm: FC<ConversionFormProps> = () => {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  const [tempature, setTempature] = useState(0)
  const [isCelsius, setIsCelsius] = useState(true)

  const convert = (e: any) => {
    e.preventDefault()
    const formValid = !isNaN(+celsius)
    if (!formValid) {
      return
    }
    if (isCelsius) {
      setFahrenheit(+tempature * (9 / 5) + 32)
    } else {
      setCelsius((+tempature - 32) * (5 / 9))
    }
  }

  return (
    <div className="ConversionForm" data-testid="ConversionForm">
      <form onSubmit={convert}>
        <div>
          <label>temperature in celsius</label>
          <Input value={tempature} onChange={(e: any) => setTempature(e.target.value)}></Input>
          <Select
            onChange={(e) => {
              console.log("e.tar")
              e.target.value === "C" ? setIsCelsius(true) : setIsCelsius(false)
            }}
          >
            <option value="C">C</option>
            <option value="F">F</option>
          </Select>
        </div>
        <button type="submit">convert</button>
      </form>
      <div>
        Tempature is {} {isCelsius ? fahrenheit + "F" : celsius + "C"}
      </div>
    </div>
  )
}

export default ConversionForm
