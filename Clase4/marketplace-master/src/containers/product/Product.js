import React, { Component } from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
            This is Product page and you have selected {this.props.match.params.productId}
            </div>
        );
    }
}