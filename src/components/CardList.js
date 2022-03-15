import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/CardList.css';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    const { title, image, price, id } = this.props;

    this.state = {
      cartList: {
        prodTitle: title,
        prodPrice: price,
        prodId: id,
        prodImage: image,
        prodQTD: 1,
      },
    };
  }

  readList = () => JSON.parse(localStorage.getItem('cartList'));

  saveList = (list) => localStorage
    .setItem('cartList', JSON.stringify(list));

  removeItem = (target) => {
    const localList = this.readList();
    this.saveList(localList.filter((item) => item.prodId !== target));
  }

  handleCart = () => {
    const { cartList } = this.state;
    if (!JSON.parse(localStorage.getItem('cartList'))) {
      localStorage.setItem('cartList', JSON.stringify([]));
    }
    const localList = this.readList();
    if (localList.length === 0) {
      this.saveList([...localList, cartList]);
    }
    localList.forEach((element) => {
      if (cartList.prodId === element.prodId) {
        const value = element;
        this.removeItem(element.prodId);
        value.prodQTD += 1;
        const newLocalList = this.readList();
        this.saveList([...newLocalList, value]);
      } else {
        this.saveList([...localList, cartList]);
      }
    });
  };

  handleCards = () => {
    const { title, image, price, id } = this.props;
    return (
      <div>
        <Link className="link-shopping-card-list" to={ `/productdetail/${id}` }>
          <section data-testid="product-detail-link">
            <div
              className="card-list-container"
              data-testid="product"
              id={ id }
            >

              <p className="title-card-list">{title}</p>
              <img className="image-card-list" src={ image } alt={ title } />
              <p className="price-card-list">
                R$
                {' '}
                { price }
              </p>
            </div>
          </section>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleCart }
          // value={ id }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  render() {
    return (
      <>{ this.handleCards() }</>
    );
  }
}

CardList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default CardList;
