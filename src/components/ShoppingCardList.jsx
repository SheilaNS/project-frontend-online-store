import React from 'react';
import PropTypes from 'prop-types';
import '../assets/ShoppingCardList.css';
import { Link } from 'react-router-dom';

class ShoppingCardList extends React.Component {
  readList = () => JSON.parse(localStorage.getItem('cartList'));

  saveList = (list) => localStorage
    .setItem('cartList', JSON.stringify(list));

    removeItem = ({ target }) => {
      const localList = this.readList();
      this.saveList(localList.filter((item) => item.prodId !== target.value));
    }

  handleCards = () => {
    const { title, image, price, id, qtd } = this.props;
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
              <button
                data-testid="product-increase-quantity"
                type="button"
                // onClick={}
              >
                +
              </button>
              <p data-testid="shopping-cart-product-quantity">{qtd}</p>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                // onClick={}
              >
                -
              </button>
              <button
                value={ id }
                type="button"
                onClick={ this.removeItem }
              >
                x
              </button>
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
