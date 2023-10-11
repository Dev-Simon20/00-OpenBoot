//Archivo del Hook personalizado

import { useState,useEffect } from "react";


export const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    
    //Cuando cambie la variable url se ejecutara el use Effect
    useEffect(()=>{
        const getData=async(url)=>{
            try {
                let res =await fetch(url);
                if (!res.ok) {
                    throw{err:true,
                        status:res.status,
                        statusText:!res.statusText?'Ocurrio un error':res.statusText,
                    };
                }
                let data=await res.json();
                setIsPending(false);
                setData(data);
                setError({err:false});
            } catch (err) {
                setIsPending(true);
                setError(err);
            }
        }
          getData(url)
    },[url])

    //Lo que retornara la funcion useFeth (Hook Personalizado)
    return{
        data,
        isPending,
        error
    }
}