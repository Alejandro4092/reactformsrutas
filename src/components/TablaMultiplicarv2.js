import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
selectNumero = React.createRef();
 generarTabla = (event) => {
    event.preventDefault();
    let numero = parseInt(this.selectNumero.current.value);
    let aux = [];
    for(let i=1;i<=10;i++){
        aux.push(numero*i);
    }
    this.setState({ numeros: aux });
 }
 generarRandoms=()=>{
    for(let i=1;i<=5;i++){
        var random=parseInt(Math.random()*50)+1;
        this.numero.push(random);

    }

 }
 state = {
    numeros: [],
    
  }
  //Lo quitamos de state porque no hace falta que se renderice cada vez que cambie solo para añadirlos al select
  numero=[]

  render() {
    return (
      <div>
     
        <h1>Tabla de multiplicar v2</h1>
        {this.generarRandoms()}
      
        <form onSubmit={this.generarTabla}>
        <select ref={this.selectNumero}>
            {
                this.numero.map((num,index)=>{
                    return(
                        <option key={index} value={num}>{num}</option>)
                })
            }

        </select>
        <button>Generar tabla</button>
        </form>
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
                    <td>{this.selectNumero.current.value}*{index+1}</td>
                    <td>{num}</td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
           
        
        




      </div>
    )
  }
}
