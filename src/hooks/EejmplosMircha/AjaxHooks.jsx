import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
export default function AjaxHooks() {
  const [pokemons, setpokemons] = useState([]);

  // useEffect(() => {
  //   let url = "https://pokeapi.co/api/v2/pokemon/";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // console.log(json.results);
  //       json.results.forEach((po) => {
  //         fetch(po.url)
  //           .then((res) => res.json())
  //           .then((json) => {
  //             // console.log(json.name);
  //             let poke = {
  //               id: json.id,
  //               name: json.name,
  //               avatar: json.sprites.front_default,
  //             };
  //             /**Explicando el Codigo
  //              * setPokemon: funcion para actualziar el estado
  //              * (pokemons):copia del estado actual del use State(array)
  //              * [...pokemons]: Agrega un nuevo elemento al final  del array pokemos
  //              * poke: Objeto agregar al final del array
  //              * Al final: ya hecha la copia y añadido los elementos
  //              * se actualiza el useState pokemons
  //              */
  //             setpokemons((pokemons) => [...pokemons, poke]);
  //           });
  //       });
  //     });
  // }, []);
  useEffect(() => {

    const getPokemon=async(url)=>{
        let res =await fetch(url);
        let json=await res.json();
        // console.log(json.results);
        json.results.forEach(async(poke)=>{
             let res=await fetch(poke.url);
             let json= await res.json();
             let poki = {
                          id: json.id,
                          name: json.name,
                          avatar: json.sprites.front_default
                       };
            setpokemons((pokemons)=>[...pokemons,poki])
        })
    }
      getPokemon("https://pokeapi.co/api/v2/pokemon/")
  }, []);




  return (
    <>
    <h1>Peticiones Asincronas en hooks</h1>

    {pokemons.length===0?
    (<h3>Cargando</h3>)
    :
    pokemons.map((poke)=>(
       <Pokemon key={poke.id} name={poke.name} avatar={poke.avatar}>
       </Pokemon>
    ))}
    {/* Nota: No olvidar que los map se devuelven asi:
      * Array.map((index)=>
        (Esto va encerrado en aprentesi)
      )
     */}
    </>
  );
}
