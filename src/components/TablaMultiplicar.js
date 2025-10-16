import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
 cajaNumero = React.createRef();
 generarTabla = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];
    for(let i=1;i<=10;i++){
        aux.push(numero*i);
    }
    this.setState({ numeros: aux });
 }
 state = {
    numeros: []
  }

  render() {
    return (
      <div>
        <div>Tabla de multiplicar</div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <input type="number" ref={this.cajaNumero} />
        <button>Generar tabla</button>
          <table border="1">
           
                <thead>
                    <tr>
                        <th>Operación</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
              {this.state.numeros.map((num,index)=>{
                return (
                  <tr key={index}>
                    <td>{this.cajaNumero.current.value}*{index+1}</td>
                    <td>{num}</td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
           
        </form>
        




      </div>
    )
  }
}
