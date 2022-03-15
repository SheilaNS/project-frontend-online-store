import React from 'react';
import '../assets/Header.css';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="shopping-cart-icon">
        <Link to="/"><h2>HOME</h2></Link>
        <Link to="/shoppingcart">
          <div data-testid="shopping-cart-button">
            <BsCart />
          </div>
        </Link>
      </header>
    );
  }
}

export default Header;
