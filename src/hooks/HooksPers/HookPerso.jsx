//Aqui solo se mostraran los resultados
import React from "react";
//Se importa el hook personalizado
import { useFetch } from "./useFetch"


export const HookPerso=()=>{
    let url="https://pokeapi.co/api/v2/pokemons/"
    // console.log(useFetch());
    let {data,isPending,error}=useFetch(url);
    return(
        <>
        <h1>Hook Personalizado</h1>
        <h3>Esta Pendiente:{JSON.stringify(isPending)}</h3>
        <br /> <br />
        {/* Combertimos un objeto a una cadena de texto */}
        <h3>Error:{JSON.stringify(error)}</h3>
        <br /><br />
        
        <h3>
            <pre style={{whiteSpace:'pre-wrap',ali}}>
                <code>{JSON.stringify(data)}</code>
            </pre>
        </h3>
        </>
    )
}