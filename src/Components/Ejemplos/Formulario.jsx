import { useState } from "react";

// const Formulario=()=>{
//     const [nombre,setNombre]=useState('');
//     const [sabor,setSabor]=useState('');
//     const [lenguaje,setLenguaje]=useState('');
//     const [ternmios,setTerminos]=useState(false)

//     const handleSubmit=(e)=>{
//          e.preventDefault();
//          alert('El formulario se a enviado')
//     }
//     return(
//         <>
//         <h1>Formulario</h1>
//         <br />
//         <br />
//         <form onSubmit={handleSubmit}>
//             {/* obteniedo el valor de un input type Text */}
//             <label htmlFor="nombre">Nombre</label>
//             <input 
//             type="text" 
//             id="nombre" 
//             name='nombre'
//             value={nombre}
//             onChange={(e)=>setNombre(e.target.value)}
//              />

//              <hr />

//              {/* obteniedo el valor de un input type radi Button */}
//              <p>Elige tu sabor Js Favorito</p>
//              <input 
//              type="radio"  
//              id="vanilla" 
//              name='sabor' 
//              value='vanilla'
//              onChange={(e)=>setSabor(e.target.value)} 
//              />
//              <label htmlFor="vanilla">vanilla</label>
//              <input 
//              type="radio"  
//              id="react" 
//              name='sabor' 
//              value='react'
//              onChange={(e)=>setSabor(e.target.value)} 
//              defaultChecked
//              />
//              <label htmlFor="react">react</label>
//              <input 
//              type="radio"  
//              id="angular" 
//              name='sabor' 
//              value='angular'
//              onChange={(e)=>setSabor(e.target.value)} 
//              />
//              <label htmlFor="angular">angular</label>
//              <input 
//              type="radio"  
//              id="vue" 
//              name='sabor' 
//              value='vue'
//              onChange={(e)=>setSabor(e.target.value)} 
//              />
//              <label htmlFor="vue">vue</label>

//              <br /><br />
//              <hr />
             
//               {/* obteniedo el valor de un input type lista */}
//               <p>Elige tu Lenguaje de programacion favorito</p>
//               <select 
//               name="lenguaje" 
//               onChange={(e)=>setLenguaje(e.target.value)} defaultValue='js'>

//               <option value="">---</option>
//               <option value="js">JavaScript</option>
//               <option value="php">PHP</option>
//               <option value="py">Python</option>
//               <option value="go">GO</option>
//               <option value="ruby">Ruby</option>
//               </select>
//               <hr /><br /><br />
//               <label htmlFor="terminos">Acepto terminos y condiciones</label>
//               <input 
//               type="checkbox" 
//               id="terminos" 
//               name="terminos"
//               onChange={(e)=>setTerminos(e.target.checked)}
//               />
//               <br /> <br />
//               <input type="submit" />
              
//         </form>
//         </>
//     )
// }

// export default Formulario

const Formulario=()=>{
    const [formu,setForm]=useState({
        nombre: '',
        sabor: '',
        lenguaje: ''
    });

    const handelChange=(e)=>{
          setForm({
            ...formu,
            [e.target.name]:e.target.value
          })
    }
    const handelChecked=(e)=>{
          setForm({
            ...formu,
          [e.target.name]:e.target.checked
          })
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
         alert('El formulario se a enviado')
    }
    return(
        <>
        <h1>Formulario</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            {/* obteniedo el valor de un input type Text */}
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" 
            id="nombre" 
            name='nombre'
            value={formu.nombre}
            onChange={handelChange}
             />

             <hr />

             {/* obteniedo el valor de un input type radi Button */}
             <p>Elige tu sabor Js Favorito</p>
             <input 
             type="radio"  
             id="vanilla" 
             name='sabor' 
             value='vanilla'
             onChange={handelChange} 
             />
             <label htmlFor="vanilla">vanilla</label>
             <input 
             type="radio"  
             id="react" 
             name='sabor' 
             value='react'
             onChange={handelChange} 
             defaultChecked
             />
             <label htmlFor="react">react</label>
             <input 
             type="radio"  
             id="angular" 
             name='sabor' 
             value='angular'
             onChange={handelChange} 
             />
             <label htmlFor="angular">angular</label>
             <input 
             type="radio"  
             id="vue" 
             name='sabor' 
             value='vue'
             onChange={handelChange} 
             />
             <label htmlFor="vue">vue</label>

             <br /><br />
             <hr />
             
              {/* obteniedo el valor de un input type lista */}
              <p>Elige tu Lenguaje de programacion favorito</p>
              <select 
              name="lenguaje" 
              onChange={handelChange} defaultValue='js'>

              <option value="">---</option>
              <option value="js">JavaScript</option>
              <option value="php">PHP</option>
              <option value="py">Python</option>
              <option value="go">GO</option>
              <option value="ruby">Ruby</option>
              </select>
              <hr /><br /><br />
              <label htmlFor="terminos">Acepto terminos y condiciones</label>
              <input 
              type="checkbox" 
              id="terminos" 
              name="terminos"
              onChange={handelChecked}
              />
              <br /> <br />
              <input type="submit" />
              
        </form>
        </>
    )
}

export default Formulario