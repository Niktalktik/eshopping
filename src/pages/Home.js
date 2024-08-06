import React from 'react';
import './Home.css';

const Home = () => {
  const products = [
    { id: 1, name: 'Aloe Vera', price: '$10', image: '/images/aloe-vera.jpg' },
    { id: 2, name: 'Snake Plant', price: '$15', image: '/images/snake-plant.jpg' },
    { id: 3, name: 'Peace Lily', price: '$20', image: '/images/peace-lily.jpg' },
    { id: 4, name: 'Spider Plant', price: '$12', image: '/images/spider-plant.jpg' },
    { id: 5, name: 'Fiddle Leaf Fig', price: '$25', image: '/images/fiddle-leaf-fig.jpg' },
    { id: 6, name: 'Succulent', price: '$8', image: '/images/succulent.jpg' },
  ];

  return (
    <div className="home">
      <h1>Welcome to the Plant Shop</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
