import React, { Component } from 'react';

export default class ProductFilter extends Component {
constructor(props) {
  super(props);

  this.state  = {
    userInput: ''
  };

  //Handlers
  this.hanbleUserInput = this.hanbleUserInput.bind(this);
  this.handlerUserSearch = this.handlerUserSearch.bind(this);
}

hanbleUserInput(value) {
  this.setState({
    userInput: value
  })
}

handlerUserSearch(e) {
  //evitamos que en formulario envie la data y refresque la pagina al mismo tiempo
  e.preventDefault();
  //invocamos a la funcion del padre enviada como parametro de props
  this.props.onProductFilter(this.state.userInput);

  //limpia el input al salir
  this.setState({
    userInput: ''
  });
}


  render() {
    return (
      <div className="row justify-content-center">  
        <div className="col-xs-8 pt-3 mb-3">      
          <form className="form-inline" onSubmit={e => this.handlerUserSearch (e)}>
            <div className="form-group mx-sm-3 mb-2">
              <input 
              type="text" 
              className="form-control" 
              onChange={e => this.hanbleUserInput(e.target.value)}   
              placeholder="Que estas buscando?"
              //limpia el input al salir
              value={this.state.userInput} />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
}