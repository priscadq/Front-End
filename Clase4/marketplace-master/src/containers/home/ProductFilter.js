import React, { Component } from 'react';

export default class ProductFilter extends Component {
constructor(props) {
  super(props);

  this.state  = {
    userInput: ''
  };

  //Handlers
  this.hanbleUserInput = this.hanbleUserInput.bind(this);

}

hanbleUserInput(value) {
  this.setState({
    userInput: value
  })
}


  render() {
    return (
      <div className="row justify-content-center">  
        <div className="col-xs-8 pt-3 mb-3">      
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input 
              type="text" 
              className="form-control" 
              onChange={e => this.hanbleUserInput(e.target.value)}   
              placeholder="Que estas buscando?" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
}