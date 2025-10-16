import React, { Component } from 'react'

export default class FormSimple extends Component {
    //necesitamos una variable de referencia para cada objeto del formulario
    cajaNombre = React.createRef();
    peticionFormulario = (event) => {
        //Detenemos el submit del formulario
        event.preventDefault();
    console.log("Formulario enviado");
    //RECUPERAR EL VALOR DE UN OBJETO REACT:
    let nombre=this.cajaNombre.current.value;
    console.log("El nombre es: "+nombre);
    this.setState({
      nombre:nombre
    })
    }
    state={
      nombre:""

    }
  render() {
    return (
      <div>
        <h1>Formulario Simple React</h1>
        <h2 style={{color:"blue"}}>{this.state.nombre}</h2>
        <form onSubmit={this.peticionFormulario}>
            <label>Nombre:</label>
            <input type="text" ref={this.cajaNombre} />
            <button>Realizar petición</button>
        </form>





      </div>
    )
  }
}
