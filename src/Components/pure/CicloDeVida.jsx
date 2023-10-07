/**
 * Eejemplo de componenete de tipo clase que dispone de los 
 * metodos de ciclo de vida 
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component{

    constructor(props){
        super(props);
        console.log('Construtor: Cuando se instanmcia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del compoonente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el   montaje del compoonente, antes de renderizarlo');
    }
    componenetWillRecieveProps(){
        console.log('WILLRECIEVEPROPS: Si va a recibir nuevas props ');
    }

    shouldComponentUpdate(nextProps,nexState){
        /**
         * Controlar si el componente debe o no actualizarse
         */

        //Returm  true/ False
    }

    componentWillUpdate(nextProps,nextState){
         console.log('WILLUPDATE: Justo antes de actualizarse');
    }

    componentDidUpdate(){
        console.log('DIDIUPDATE: Justo despues de actualizarse');
    }

    componentWillUnMount(){
        console.log('WILLUNMOUNT:  Justo antes de desaparecer');
    }




    render(){
        return(
            <></>
        );
    }

 

}


export default LifeCycleExample;