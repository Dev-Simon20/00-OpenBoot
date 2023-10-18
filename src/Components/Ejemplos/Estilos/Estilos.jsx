import './Estilos.css'
import './Estilos.scss'

const Estilos=()=>{
     return(
        
         <section className='estilos'>
            <h1>Estilos en React</h1>
         <h3 className="bg-react">Estilos en hoja css3 Externa</h3>
         <h3 style={{background:'red',color:'black',borderRadius:'.5rem'}}>Estilos en Liena</h3>
         <h3 className='bg-sass'>Estilos cosn sass
             <br />
             <p className='bg-sass-parra'>Parrafo</p>
         </h3>

         </section>
  
     )
}

export default Estilos