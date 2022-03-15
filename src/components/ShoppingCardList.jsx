import React from 'react';
import PropTypes from 'prop-types';
import '../assets/ShoppingCardList.css';
import { Link } from 'react-router-dom';

class ShoppingCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  readList = () => JSON.parse(localStorage.getItem('cartList'));

  saveList = (list) => localStorage
    .setItem('cartList', JSON.stringify(list));

    removeItem = ({ target }) => {
      const localList = this.readList();
      console.log(target);
      this.saveList(localList.filter((item) => item.prodId !== target.value));
    }

    handleClick = ({ target }) => {
      if (target.id === 'more') {
        const storage = this.readList();
        const item = storage.find((element) => element.prodId === target.value);
        item.prodQTD += 1;
        this.saveList(storage.filter((element) => element.prodId !== target.value));
        const newLocalList = this.readList();
        this.saveList([...newLocalList, item]);
      } else {
        const storage = this.readList();
        const item = storage.find((element) => element.prodId === target.value);
        item.prodQTD -= 1;
        this.saveList(storage.filter((element) => element.prodId !== target.value));
        const newLocalList = this.readList();
        this.saveList([...newLocalList, item]);
      }
    }

  handleCards = () => {
    const { title, image, price, id, qtd } = this.props;
    const { counter } = this.state;
    return (
      <div className="card-list-container">
        <div className="remove-item">
          <button
            value={ id }
            type="button"
            onClick={ this.removeItemFromCart }
          >
            x
          </button>
        </div>
        <Link className="link-shopping-card-list" to={ `/productdetail/${id}` }>
          <section data-testid="product-detail-link">
            <div
              data-testid="product"
              id={ id }
            >
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ image } alt={ title } />
              <p>
                R$
                {' '}
                { price }
              </p>
            </div>
          </section>
        </Link>
        <div className="change-quantity">
          <button
            data-testid="product-increase-quantity"
            type="button"
            value={ id }
            id="more"
            onClick={ this.handleClick }
          >
            +
          </button>
          <p value={ counter } data-testid="shopping-cart-product-quantity">{`${qtd}`}</p>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            value={ id }
            id="less"
            onClick={ this.handleClick }
          >
            -
          </button>
        </div>
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
