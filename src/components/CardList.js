import React from 'react';
import PropTypes from 'prop-types';
import '../assets/CardList.css';

class CardList extends React.Component {
  // título, imagem e preço como props
  render() {
    const { title, image, price } = this.props;
    return (
      <div className="card-list-container" data-testid="product">
        <p>{title}</p>
        <img src={ image } alt={ title } />
        <p>
          R$
          {' '}
          { price }
        </p>
      </div>
    );
  }
}

CardList.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default CardList;
