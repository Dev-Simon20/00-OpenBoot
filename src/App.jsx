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
import Reloj from './hooks/Ciclovida/Reloj'
import AjaxHooks from './hooks/EejmplosMircha/AjaxHooks'
import { Carrusel } from './hooks/Carrusel/Carrusel'
import { HookPerso } from './hooks/HooksPers/HookPerso'
import CustomTextInput from './hooks/UseRef/Referencia'
import Formulario from './Components/Ejemplos/Formulario'
import CompStyle from './Components/Ejemplos/Compo/CompStyle'

function App() {
  document.body.style.backgroundColor = '#4586e9';
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
       {/* <CicloLife></CicloLife> */}
       {/* <Reloj></Reloj> */}
       {/* <AjaxHooks></AjaxHooks> */}
       {/* <Carrusel></Carrusel> */}
       {/* <HookPerso></HookPerso> */}
       {/* <CustomTextInput></CustomTextInput> */}
       {/* <Formulario></Formulario> */}
       {/* <Estilos></Estilos> */}
      <CompStyle></CompStyle>

       
    </>
  )
}

export default App
