import { useState } from 'react'
import Greeting from './Components/pure/greeting'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting/>
    </>
  )
}

export default App
