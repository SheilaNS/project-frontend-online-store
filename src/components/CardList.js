import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/CardList.css';

class CardList extends React.Component {
  // título, imagem e preço como props
  handleCards = () => {
    const { title, image, price, id } = this.props;
    return (
      <Link to={ `/productdetail/${id}` }>
        <section data-testid="product-detail-link">
          <div
            className="card-list-container"
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
