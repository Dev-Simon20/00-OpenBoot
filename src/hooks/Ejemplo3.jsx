/**
 * Ejemplo HOOKS
 * 
 * -useState
 * -useContext
 */
import React, { useState, useContext } from "react"

/**
 * 
 * @returns 
 * Componente 1
 * Dispone de un contexto que va a tener un valor 
 * que recibe desde el padre
 */

const miContexto=React.createContext(null)

const Componente1=()=>{
    //Creamos un estado vaciuo qye va a rellenarse con los
    // datos del contexto del padre
    const state=useContext(miContexto)
    return (<>
        <h1>El token es:{state.token}</h1>

        {/**Agregamos el componenet 2 */}
        <Componente2></Componente2>
    </>)
}


const Componente2=()=>{

    const state=useContext(miContexto);
    return (<>
        <h2>La session es: {state.session}</h2>
    </>)
}

const MiComponenteConContexto=()=>{

    const estadoinicial={
        token:'12345',
        session:1

    }
    //Creamos el estado del componente
    const [sessionData,setData]=useState(estadoinicial)

    const actualizarSession=()=>{
        let ramdom=parseInt(Math.random()*10000);
        setData({
            token:`JWT${ramdom}`,
            session:sessionData.session+1
        })

    }
      return (<>
      <miContexto.Provider value={sessionData}>
        {/** Todo lo que esté aqui dentro puede leer los datos de sessionData */}
        {/*Ademas, sis se actualiza, los componenetes de aqui tambien se actualizan */}
        <Componente1></Componente1>
         <button onClick={actualizarSession}>Actualiz</button>

      </miContexto.Provider>
      </>)
}
export default MiComponenteConContexto