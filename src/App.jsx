import { useState } from 'react'
import './App.css'
import { LineGraph } from './components/Line'
import OverallStatsChart from './bookStatComp/OverallStatsChart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="mainframe">
      <LineGraph />
      <OverallStatsChart/>
    </div>
    </>
  )
}

export default App
