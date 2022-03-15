import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Header from './Header';
import '../assets/ProductDetails.css';
import Rate from './Rate';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      email: '',
      evaluation: '',
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  readList = () => JSON.parse(localStorage.getItem('cartList'));

  saveList = (list) => localStorage
    .setItem('cartList', JSON.stringify(list));

  handleCart = () => {
    const { products } = this.state;
    const cartList = {
      prodTitle: products.title,
      prodPrice: products.price,
      prodId: products.id,
      prodImage: products.thumbnail,
      prodQTD: 1,
    };
    if (!JSON.parse(localStorage.getItem('cartList'))) {
      localStorage.setItem('cartList', JSON.stringify([]));
    }
    const localList = this.readList();
    this.saveList([...localList, cartList]);
  };

  handleProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await api.getProducts(id);
    this.setState({
      products: product,
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick = (event) => {
    const { email, evaluation } = this.state;
    event.preventDefault();
    this.setState({
      email: '',
      evaluation: '',
    });
  }

  render() {
    const { products, email, evaluation } = this.state;
    return (
      <>
        <Header />
        <div className="image-detail-div">
          <img className="image-detail" src={ products.thumbnail } alt="product-detail" />
          <div className="definitions">
            <p data-testid="product-detail-name">
              <strong>
                Title:
                {' '}
              </strong>
              { products.title }
            </p>
            <br />
            <p>
              <strong>
                Price:
                {' '}
              </strong>
              { products.price }
            </p>
            <br />
            <p>
              <strong>
                Warranty:
                {' '}
              </strong>
              { products.warranty }
            </p>
            <br />
            <p>
              <strong>
                Title:
                {' '}
              </strong>
              { products.initial_quantity }
            </p>
          </div>
          <button
            className="btn-add-cart"
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.handleCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <fieldset className="fieldset-evaluation">
          <legend className="legend-evaluation">Evaluation</legend>
          <form className="form-evaluation">
            <label htmlFor="email">
              <input
                data-testid="product-detail-email"
                id="email"
                value={ email }
                type="email"
                name="email"
                placeholder="Digite o email aqui."
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="email">
              <Rate />
              <textarea
                data-testid="product-detail-evaluation"
                id="evaluation"
                value={ evaluation }
                type="evaluation"
                name="evaluation"
                placeholder="Digite sua avaliação aqui."
                onChange={ this.handleChange }
              />
            </label>

            <button
              className="button-evaluation"
              type="submit"
              data-testid="submit-review-btn"
            >
              Submit
            </button>
          </form>
        </fieldset>
        <section className="people-evaluation">
          <p>{ }</p>
          <p></p>
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
