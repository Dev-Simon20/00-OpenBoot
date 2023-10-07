/**
 * Eejemplo de uso del metodo
 * de ciclo de vida de un componente clase y el hook de ciclo de vida 
 * en componente funcional
 */
import React,{Component,useEffect} from "react";

export  class DidMount extends Component{

    componentDidMount(){
        console.log('Comportamiento antes que el componenete sea añadido al DOM (Renderize)');
    }
    render(){
        return(
            <>
             <h1>DdiMount</h1>
            </>
        );
    }
}

export const DidMountHook=()=>{

    useEffect(()=>{
        console.log('Comportamiento antes que el componenete sea añadido al DOM (Renderize)');
        
    },[])

    return(<>
          <h1>Did Mount</h1>

    </>)
}

