import { useState } from 'react'
import Greeting from './Components/pure/greeting'
import TaskList from './Components/containers/task_list'

import './App.css'
import Gretff from './Components/pure/gretingf'
import Ejemplo1 from './hooks/Ejmplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Eejmplo4'
import CicloLife from './hooks/Ciclovida/jon-LifeCicle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting name={'Jeampierk'}/>
      <Gretff name={'Jeampierk'}/>
       <TaskList></TaskList> */}


       {/* <Ejemplo1/> */}
       {/* <Ejemplo2></Ejemplo2> */}
       {/* <MiComponenteConContexto></MiComponenteConContexto> */}

       {/* <Ejemplo4 nombre={'Jeampierk'}>
       Todo lo que esta aqui adentro de este Componente es tratado como props .childrem
        <h3>
          Contenido del Children
        </h3>
       </Ejemplo4> */}
       <CicloLife></CicloLife>

       
    </>
  )
}

export default App
