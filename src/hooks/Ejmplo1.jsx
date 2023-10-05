import { useState } from "react";

const Ejemplo1=()=>{
    const valorInicial=0;
    const personaInicial={
        nombre:'Jeampierk',
        email:'jeanpierks6@gmail.com'
    }

   /**
    * Queremos que el VALORINICIAL y PERSONA INICIAL sean
    * parte del estado del componente para asi poder gestionar su cambio
    * y que este se vea reflejado en la vista del componente
    * 
    * const[nombreVariable,funcionCmabiar]=useState(valorInicial)
    */
     const [contador,setContador]=useState(valorInicial);
     const [persona,setPersona]=useState(personaInicial)
     /**
      * Funcion para actuaklizar el estado privado que contien el comtador
      */

     const incrementarContador=()=>{
        //?setContador(nuevoValor)
         setContador(contador+1);
     }

     /**
      * Funcion para actualizar el estado de persona en el componente
      */

     const actualizarPersona=()=>{
        setPersona(
            {
                nombre:'Pepe',
                email:'pepe@gmail.com'
            }
        )
     }
     const backToHome=()=>{
        const back=0;
        setContador(back)
     }


    return(

        <>
            <h1>**Ejemplo de useState{}****</h1>
            <h2>Contador {contador}</h2>
            <h2>Persona </h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>

            <div>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
                <button onClick={incrementarContador}>Actualziar Contador</button>
                <button onClick={backToHome}>Reiniciar</button>
            </div>
        </>
    )
}

export default Ejemplo1