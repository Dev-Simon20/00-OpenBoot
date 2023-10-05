import { useState } from 'react'
import Greeting from './Components/pure/greeting'
import TaskList from './Components/containers/task_list'

import './App.css'
import Gretff from './Components/pure/gretingf'
import Ejemplo1 from './hooks/Ejmplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting name={'Jeampierk'}/>
      <Gretff name={'Jeampierk'}/>
       <TaskList></TaskList> */}
       {/* <Ejemplo1/> */}
       {/* <Ejemplo2></Ejemplo2> */}
       <MiComponenteConContexto></MiComponenteConContexto>
    </>
  )
}

export default App
