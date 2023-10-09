import { useState,useEffect } from "react"

const Rel=(props)=>{
    return(
        <>
          <h3>La hora es: {props.hora}</h3>
        </>
    )
}


const Reloj=()=>{
    
    const [hora,setHora]=useState(new Date().toLocaleTimeString())
    const [visible,setVisible]=useState(false)
    
    
    useEffect(()=>{
        var test;
        console.log(' Se crea o Actuliza los datos');
        if (visible) {
            test=setInterval(()=>{
                setHora(new Date().toLocaleTimeString());
         
            },1000);
       
        }
        return()=>{
            console.log('Fase de desmontaje');
            clearInterval(test)
        }
    },[visible])
    return(
        <>
        <h2>Entendiendo el Ciclo de vida con un Componente Funcional</h2>
        {visible&&<Rel hora={hora}/>}
         <button onClick={()=>{setVisible(true)}}>Iniciar </button>
         <button onClick={()=>{setVisible(false)}}>Detener </button>
        </>
        
    )
}

export default Reloj