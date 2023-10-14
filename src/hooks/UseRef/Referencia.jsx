import { useRef } from "react";
function CustomTextInput(props) {

     let refMenubtn = useRef(null);
     let refMenu = useRef(null);
    
    function handletoggel(e) {
    if (refMenubtn.current.textContent==='Menu') {
        refMenubtn.current.textContent='Cerrar'
        refMenu.current.style.display='block'
    }
    else{
        refMenubtn.current.textContent='Menu'
        refMenu.current.style.display='none'
    }
    }
     
    return (
      <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenubtn} onClick={handletoggel}>Menu</button>
      <nav id="menu" ref={refMenu} style={{display:"none"}}>
        <a href="#">seccion 1</a><br />
        <a href="#">seccion 2</a><br />
        <a href="#">seccion 3</a><br />
        <a href="#">seccion 4</a><br />
        <a href="#">seccion 5</a><br />
      </nav>
      </>
    );
  }

export default CustomTextInput