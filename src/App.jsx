import { useState } from 'react'
import Greeting from './Components/pure/greeting'

import './App.css'
import Gretff from './Components/pure/gretingf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting name={'Jeampierk'}/>
      <Gretff name={'Jeampierk'}/>
    </>
  )
}

export default App
