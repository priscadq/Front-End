import React, { Component } from 'react';

export default class ProducItem extends Component {
  render() {
    // Destructuramos las propiedades necesarias del objeto producto
    const { imageUrl, title, description } = this.props.product;

    return (
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <a href="#">
            <img className="card-img-top" src={imageUrl} alt={title} />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{title}</a>
            </h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}