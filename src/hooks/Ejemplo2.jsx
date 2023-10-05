/**
 * Ejemplo de uso de :
 * - uSe State()
 * - useRef(): Referenciar elemeto dentro de la vista
 * - useEffect(): Sirve para controlar los camnbio en la vista
 */

import { useState,useRef} from "react";
import { useEffect } from "react";

const Ejemplo2=()=>{


    //Vamos a crear dos contadores ditintos
    //Cada uno en un estado Diferente
    const [contador,setContador]=useState(0);
    const [contador2,steContador2]=useState(0);

    //Vamoa a crear una referencia con useRef()
    //Para ascoiar un avariable con un elemneto enm el Dom
    //del componente (vistahtml)
    const miRef=useRef();

    const incrementar=()=>{
        setContador(contador+1)
    }
    const incrementar2=()=>{
        steContador2(contador2+1)
    }
    /**
     * Trabajndo con UseEffect
     * 
     * Caso1= Ejecutar siempre un script de codigo
     * Cada veZ que haya un cambio en el estado del componente
     * se ejecute lo que esta dentro del useEffect()
     */

    // useEffect(()=>{
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENETE');
    //     console.log('Mostrando Referencia a elemto del Dom');
    //     console.log(miRef);
    // })

    /**
     * Caso2= Se ejecutara SOLO CUANDO CAMBVIE EL CONTADOR 1
     * en caso de que cambie contado 2 no habra cambio
     */

    // useEffect(()=>{
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando Referencia a elemto del Dom');
    //     console.log(miRef);
    // },[contador]) 


    /**
     * Caso3= Se ejecutara Cuando caambie el contador1 o el contador 2
     */

    useEffect(()=>{
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 O CONTADOR 2');
        console.log('Mostrando Referencia a elemto del Dom');
        console.log(miRef);
    },[contador,contador2])


    return(<>
         
         <h1>**Ejemplo de useState{}, useRef(), useEffect()****</h1>
         <h2>Contador 1 : {contador}</h2>
         <h2>Contador 2 : {contador2}</h2>
         {/*Elemento Referenciado */ }
         <h4 ref={miRef}>
             Ejemplo de elemento referenciado
         </h4>

         <div>
            <button onClick={incrementar}>incrementar1</button>
            <button onClick={incrementar2}>incrementar2</button>
         </div>
    
    </>)
}


export default  Ejemplo2