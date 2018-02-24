import React, { Component } from 'react';

export default class ProductFilter extends Component {
  render() {
    return (
      <div class="row justify-content-center">  
        <div class="col-xs-8 pt-3 mb-3">      
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <input type="text" className="form-control" placeholder="Que estas buscando?" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Buscar</button>
          </form>
        </div>
      </div>
    );
  }
}