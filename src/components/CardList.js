import React from 'react';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  // título, imagem e preço como props
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
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
