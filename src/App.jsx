import { useState } from 'react'
import './App.css'
import { LineGraph } from './components/Line'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LineGraph />
    </>
  )
}

export default App
