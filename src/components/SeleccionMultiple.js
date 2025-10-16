import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    selectMultiple = React.createRef();
    mostrarSeleccionados = (event) => {
    event.preventDefault();
    let options = this.selectMultiple.current.options;
    var data=";"
    //Debemos recorrer todas las opciones
    //Dentro de cada options individual tenemos un atributo llamado selected para averiguar si el elemento esta seleccionado
    for (var option of options){
        if (option.selected == true) {
            console.log(option.value);
            data+=option.value+" ";
        }
    }
     this.setState({
        seleccionados: data
    });
    }
   
    
    state = {
        seleccionados: ""
    }
  render() {
    return (
      <div>
        <h1>Selección Múltiple</h1>
        <h2 style={{color:"blue"}}>
            {this.state.seleccionados}
        </h2>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seleccione varios elementos</label>
            <select size="10" multiple ref={this.selectMultiple}>
                <option>Elemento1</option>
                <option>Elemento2</option>
                <option>Elemento3</option>
                <option>Elemento4</option>
                <option>Elemento5</option>
                <option>Elemento6</option>
                <option>Elemento7</option>
            </select>
            <button>Seleccionar</button>
        </form>


      </div>
    )
  }
}
