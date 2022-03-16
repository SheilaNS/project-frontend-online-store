import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Header from './Header';
import '../assets/ProductDetails.css';
import Rate from './Rate';
import EvaluationList from './EvaluationList';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    const number = 5;
    this.state = {
      products: [],
      email: '',
      evaluation: '',
      array: [...Array(number)],
      rate: 0,
      evaluationList: [],
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  readList = () => JSON.parse(localStorage.getItem('evaluationList'));

  saveList = (list) => localStorage
    .setItem('evaluationList', JSON.stringify(list));

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

  handleClick = ({ target }) => {
    const position = target.value;
    const arrayBox = target.parentNode.childNodes;
    arrayBox.forEach((element, index) => {
      if (index <= position) {
        element.checked = true;
        this.setState({
          rate: +position + 1,
        });
      } else {
        element.checked = false;
      }
    });
  }

  handleEvaluationButton = (event) => {
    event.preventDefault();
    const { email, evaluation, rate } = this.state;
    const obj = {
      email,
      evaluation,
      rate,
    };

    this.handleUncheck(rate);

    this.setState((previous) => ({
      evaluationList: [...previous.evaluationList, obj],
    }), () => this.handleLocalStorage());

    this.setState({
      email: '',
      evaluation: '',
      rate: 0,
    });
  }

  handleUncheck = (rate) => {
    const arrayBox = document.getElementsByClassName('rate');
    for (let index = 0; index < rate; index += 1) {
      arrayBox[index].checked = false;
    }
  }

  handleLocalStorage = () => {
    const { evaluationList } = this.state;
    this.saveList(evaluationList);
  }

  render() {
    const { products, email, evaluation, array, evaluationList } = this.state;
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
              <Rate
                array={ array }
                handleClick={ this.handleClick }
              />
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
              onClick={ this.handleEvaluationButton }
            >
              Submit
            </button>
          </form>
        </fieldset>
        <section className="people-evaluation">
          {
            evaluationList.length !== 0 && evaluationList
              .map((element, index) => <EvaluationList key={ index } data={ element } />)
          }
        </section>
        <section className="people-evaluation">
          {
            this.readList() !== null && this.readList()
              .map((element, index) => <EvaluationList key={ index } data={ element } />)
          }
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductDetails;
