## Notas 
### UseEffect
* Para simular la fase de montaje de un componente (DidMount)
  * useEffect(()=>{  
        console.log('Se Ejecuatara una sola vez, porque hay corchetes vacios al Final');  
    },[])
 * Para simular la fase de actualizacion de un componente (DidUpdate)
   * useEffect(()=>{  
        console.log('Se Ejecuatara todas las veces que halla un cambio');  
    })
   *  useEffect(()=>{  
        console.log('Se Ejecuatara todas las veces, pero solo cuando el parametro al final se actualize("Valor")');  
    },[valor])
    
 * Para Simular la fase de desmontaje de un componente (WillUnMount)
   * useEffect( ()=>{  
        return ()=>{  
            console.log('Fase de desmontaje de un Componente');  
         }  
    })
---
