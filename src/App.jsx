import { useState } from 'react'
import Greeting from './Components/pure/greeting'
import TaskList from './Components/containers/task_list'

import './App.css'
import Gretff from './Components/pure/gretingf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting name={'Jeampierk'}/>
      <Gretff name={'Jeampierk'}/> */}
       <TaskList></TaskList>
    </>
  )
}

export default App
