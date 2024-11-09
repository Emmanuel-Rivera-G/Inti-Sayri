import { useState } from 'react'
import './App.css'
import Sliderbar from './components/Sliderbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sliderbar/>
    </>
  )
}

export default App
