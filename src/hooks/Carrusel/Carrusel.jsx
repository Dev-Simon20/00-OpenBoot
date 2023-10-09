import { useState } from "react"
import Imagen from "./Imagenes"


export const Carrusel=()=>{
    var imag=["https://hips.hearstapps.com/hmg-prod/images/demon-slayer-1657889450.jpeg?crop=1xw:1xh;center,top&resize=1200:*","https://i.blogs.es/679f07/diseno-sin-titulo-5-/840_560.jpeg","https://i.blogs.es/60de22/mejores-animes-crunchyroll/1366_2000.jpeg","https://www.mundodeportivo.com/alfabeta/hero/2020/09/sword-art-online.jpg?width=768&aspect_ratio=16:9&format=nowebp","https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/07/animes-star-plus.jpg?fit=1500%2C788&quality=50&strip=all&ssl=1"]
    const [imagen,setimagen]=useState(imag)
    const [posicion,setPos]=useState(0)
    const siguiente=()=>{
        console.log('entrada',posicion);
        if(posicion<4){
            setPos(posicion+1);
            console.log("salida",posicion);
        }
        else{
            setPos(0)
        }
        
    }
    const atras=()=>{
        if(posicion>0){
            setPos(posicion-1);
        }
        else{
            setPos(4)
        }
        
    }
    return(
        <>
        <h1>Carrusel</h1>
        <Imagen url={imagen[posicion]}></Imagen>
        <br />
        <button onClick={atras}>Atras</button>
        <button onClick={siguiente}>Siguiente</button>
        </>
    )
}