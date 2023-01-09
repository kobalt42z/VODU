import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Checkbox, DarkThemeToggle, Flowbite, Label, TextInput } from 'flowbite-react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Browser } from './routes/Browser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Browser/>
    </>
  )
}

export default App
