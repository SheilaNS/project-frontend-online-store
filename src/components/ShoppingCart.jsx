import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../assets/ShoppingCart.css';
import ShoppingCardList from './ShoppingCardList';

class ShoppingCart extends React.Component {
  readList = () => JSON.parse(localStorage.getItem('cartList'));

  saveList = (list) => localStorage
    .setItem('cartList', JSON.stringify(list));

  render() {
    // const { cartList } = this.state;
    if (!JSON.parse(localStorage.getItem('cartList'))) {
      localStorage.setItem('cartList', JSON.stringify([]));
    }
    const cartList = this.readList();
    return (
      <>
        <Header />
        <div className="shopping-card">
          {
            cartList.length === 0
              ? (
                <div
                  data-testid="shopping-cart-empty-message"
                  className="empty-cart"
                >
                  Seu carrinho está vazio
                </div>)
              : cartList.map((prod, index) => (
                <ShoppingCardList
                  key={ index }
                  title={ prod.prodTitle }
                  image={ prod.prodImage }
                  price={ prod.prodPrice }
                  id={ prod.prodId }
                  qtd={ prod.prodQTD }
                />
              ))
          }
          <Link to="/checkoutpage">
            <button type="button" data-testid="checkout-products">
              Continuar a Compra
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
