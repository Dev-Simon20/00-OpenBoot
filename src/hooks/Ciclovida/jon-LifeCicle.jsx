import React,{Component} from "react";
import { render } from "react-dom";

class Reloj extends Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        console.log(3,'El componente a sido eliminado del DoM');
    }
     render(){
        return <h3>{this.props.hora}</h3>
     }
}


export default class CicloLife extends Component{
    constructor(props){
        super(props)
        console.log(0,'El componenete se inicializa no esta en el Dom');

        this.state={
            hora:new Date().toLocaleTimeString(),
            visible:false
        }
        this.tempo=null
    }

    componentDidMount(){
        console.log(1,'El Componente ya se encuentra en el Dom');
    }
    componentDidUpdate(prevProps,prevState){
        console.log(2,'El estado o las props del componente Han cambiado');
        console.log(prevProps);
        console.log(prevState);//El estado previo del componente
    }

    tictatc=()=>{
          this.tempo=setInterval(()=>{
              this.setState({
                hora:new Date().toLocaleTimeString()
              })
          },1000);
    }
    iniciar=()=>{
      this.tictatc();
      this.setState({
        visible:true
      })
    };
    detener=()=>{
       clearInterval(this.tempo)
       this.setState({
        visible:false
      })
    };
    render(){
        console.log(4,'El componente se dibuja o redibuja por algun cambio ');
        return(
            <>
            <h2>Ciclo de vida de los componente Clase</h2>
             {this.state.visible&&<Reloj hora={this.state.hora}></Reloj>}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}