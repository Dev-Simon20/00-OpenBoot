/**
 * Eejmplo para emtender el uso de props.children
 */

const Ejemplo4=(props)=>{

    return (<>
         <h1>Ejemplo de CHILDRENS PROPS </h1>
         <h2>
            Nombre:{props.nombre}
         </h2>
         {/*props.children pintara por defecto
         aquello que se encuentre entre las etiquetas de apertura y cierre
         de este componente desde el componente de orden superior*/}
         {props.children}

    </>)
}


export default Ejemplo4