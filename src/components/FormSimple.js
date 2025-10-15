import React, { Component } from 'react'

export default class FormSimple extends Component {
    //necesitamos una variable de referencia para cada objeto del formulario
    cajaNombre = React.createRef();
    peticionFormulario = (event) => {
    console.log("Formulario enviado");
    }
  render() {
    return (
      <div>
        <h1>Formulario Simple React</h1>
        <form onSubmit={this.peticionFormulario}>
            <label>Nombre:</label>
            <input type="text" ref={this.cajaNombre} />
            <button>Realizar petición</button>
        </form>





      </div>
    )
  }
}
