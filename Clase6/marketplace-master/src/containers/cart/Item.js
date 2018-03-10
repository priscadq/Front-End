import React from 'react';

export default function Item(props) {
  const { decrementProduct, incrementProduct, item } = props;
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <button className="btn btn-danger" onClick={() => decrementProduct(item.id)}>-</button>
        &nbsp;{item.quantity}&nbsp;
        <button className="btn btn-success" onClick={() => incrementProduct(item.id)}>+</button>
      </td>
      <td>{item.price}</td>
      <td>{item.quantity * item.price}</td>
    </tr>
  );
}