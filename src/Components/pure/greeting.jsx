/*Componentes Clase y componetes Funcionales*/

import React, {Component} from 'react';
 //nos dice que tipo de datos debe de ser ingresado en la variable
import PropTypes from 'prop-types';

class Greeting extends Component{

    constructor(props){
        super(props);
        this.state={
        age:29
    }
}

    render(){
        return(
            <div>
            <h1>¡Holaa {this.props.name}</h1>
            <h2>tu edad esa {this.state.age}</h2>
            <div>
                <button onClick={this.cumple}>
                    Cumplir años 
                </button>
            </div>
            </div>
        );
    }

    cumple=()=>{
        this.setState((prevState)=>({
            age:prevState.age +1
        }))
    }

}

Greeting.propTypes={
      name:PropTypes.string,
};


export default Greeting;