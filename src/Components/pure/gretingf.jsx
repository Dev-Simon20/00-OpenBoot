import { useState } from "react"


const Gretff=(props)=>{
    const {name}=props
    const [edad,setEdad]=useState(20);

    const cumple=()=>{
        //  const nuevaEdad=edad+1;
         setEdad(edad + 1)
    }
    return ( <div>
        <h1>¡Holaa {name}</h1>
        <h2>tu edad es {edad} </h2>
        <div>
            <button onClick={cumple}>
                Cumplir años 
            </button>|
        </div>
        </div>)
}

export default Gretff