/**
 * Eejmplo de como replicxar el componenete UPDATE en un:  componente de clase
 * y uso de hook en componenete funcional
 */ 

import React, {Component, useEffect} from "react";

export  class DidUpdate extends Component{
    componentDidUpdate(){
        console.log('Comportamiwnto cuando el componenete recibe nuevo props o cambio en su estado');
    }
    render(){
        return(
            <>
              <h1>Did Update</h1>
            </>
        )
    }
}

export const DisUpdateHook=()=>{
    useEffect(()=>{
        console.log('Comportamiento cuando el componenete recibe nuevo props o cambio en su estado)');
    })
    //Sumuladnod el wllunMount
    useEffect(()=>{
        return ()=>{
            console.log('Fase de desmontaje de un Componente');
        }
    })
    return(<>
    
    </>)
}