import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ProducItem extends Component {
  render() {
    // Destructuramos las propiedades necesarias del objeto producto
    const { id, imageUrl, title, description } = this.props.product;

    return (
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
            <Link to={`/producto/${id}`}>
            <img className="card-img-top" src={imageUrl} alt={title} />
            </Link>
          <div className="card-body">
            <h4 className="card-title">
            <Link to={`/producto/${id}`}>
            {title}
            </Link>
            </h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}