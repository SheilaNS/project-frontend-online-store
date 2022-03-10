import React from 'react';
import Header from './Header';
import '../assets/ShoppingCart.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div
          data-testid="shopping-cart-empty-message"
          className="empty-cart"
        >
          Seu carrinho está vazio
        </div>
      </>
    );
  }
}

export default ShoppingCart;
