import React, { Component } from 'react';

export default class ProductFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ''
    };

    // Handlers
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  handleUserInput(value) {
    this.setState({
      userInput: value
    });
  }

  handleUserSearch(e) {
    // Evitamos que el formulario envie la data al servidor y refresque la pagina
    e.preventDefault();
    // Invocamos a la funcion del padre enviada como parametro en props
    this.props.onProductFilter(this.state.userInput);
    // Limpiamos valor para futuras busquedas
    this.setState({
      userInput: ''
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-xs-8 pt-3 mb-3">
          <form className="form-inline" onSubmit={e => this.handleUserSearch(e)}>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="text"
                className="form-control"
                onChange={e => this.handleUserInput(e.target.value)}
                placeholder="Que estas buscando?"
                value={this.state.userInput}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
}