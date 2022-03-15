import React from 'react';
import PropTypes from 'prop-types';
import '../assets/ShoppingCardList.css';
import { Link } from 'react-router-dom';

class ShoppingCardList extends React.Component {
  handleCards = () => {
    const { title, image, price, id } = this.props;
    return (
      <div className="card-list-container">
        <Link className="link-shopping-card-list" to={ `/productdetail/${id}` }>
          <section data-testid="product-detail-link">
            <div
              data-testid="product"
              id={ id }
            >
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ image } alt={ title } />
              <p data-testid="shopping-cart-product-quantity">1</p>
              <p>
                R$
                {' '}
                { price }
              </p>
            </div>
          </section>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <>{ this.handleCards() }</>
    );
  }
}

ShoppingCardList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ShoppingCardList;
