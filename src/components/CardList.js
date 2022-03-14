import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/CardList.css';

class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
    };
  }

  handleCart = () => {
    const cartList = [];
    /* const { cartList } = this.state; */
    const { title, image, price, id } = this.props;

    const infoProducts = {
      title,
      image,
      price,
      id,
    };

    // cartList.push(infoProducts);
    /* console.log(cartList); */

    // this.setState((beforeState) => ({
    //   cartList: cartList.concat({
    //     cartList: beforeState.infoProducts,
    //   }),
    // }), localStorage.setItem('cartList', JSON.stringify(cartList)));

    this.setState((beforeState) => ({
      cartList: [...beforeState.cartList, { infoProducts }],
    }), localStorage.setItem('cartList', JSON.stringify(cartList)));

    // console.log(cartList);
    // console.log(infoProducts);
  };

  handleCards = () => {
    const { title, image, price, id } = this.props;
    return (
      <div className="card-list-container">
        <Link to={ `/productdetail/${id}` }>
          <section data-testid="product-detail-link">
            <div
              data-testid="product"
              id={ id }
            >

              <p>{title}</p>
              <img src={ image } alt={ title } />
              <p>
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
