import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Header from './Header';
import '../assets/ProductDetail.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  handleProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProducts(id);
    this.setState({
      products: product,
    });
  }

  // data-testid="product-detail-name"

  render() {
    const { products } = this.state;
    return (
      <>
        <Header />
        <div className="definitions">
          <p data-testid="product-detail-name">{ products.title }</p>
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
