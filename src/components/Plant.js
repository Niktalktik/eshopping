import React from 'react';

const Plant = ({ name, price }) => (
  <div>
    <h3>{name}</h3>
    <p>{price}</p>
    <button>Add to Cart</button>
  </div>
);

export default Plant;
