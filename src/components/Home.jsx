import React from 'react';
import * as api from '../services/api';
import Header from './Header';
import '../assets/Home.css';
import Categories from './Categories';
import Search from './Search';
import CardList from './CardList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      searchResult: undefined,
      searchInput: '',
    };
  }

  componentDidMount() {
    this.handleCategories();
    this.handleCategoryAndQuery();
    this.handleProduct();
    this.handleQuery();
  }

  handleCategories = async () => {
    const categories = await api.getCategories();
    console.log(categories);
    this.setState({
      categories,
    });
    return categories;
  }

  handleCategoryAndQuery = async () => {
    const categorieAndQuery = await api.getProductsFromCategoryAndQuery();
    // console.log(categorieAndQuery);
    return categorieAndQuery;
  }

  handleProduct = async () => {
    const product = await api.getProducts();
    // console.log(product);
    return product;
  }

  handleQuery = async () => {
    const { searchInput } = this.state;
    const query = await api.getQuery(searchInput);
    console.log(query.results);
    this.setState({
      searchResult: query.results,
    });
    return query;
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { categories, searchResult, searchInput } = this.state;
    return (
      <>
        <Header />

        <section className="content">
          <Search
            value={ searchInput }
            onChange={ this.handleChange }
            onClick={ this.handleQuery }
          />
          <section className="categories-cards">
            <Categories categories={ categories } />
            <div className="cards">
              {
                searchResult !== undefined && searchResult
                  .map((element) => (<CardList
                    key={ element.id }
                    title={ element.title }
                    image={ element.thumbnail }
                    price={ element.price }
                  />))
              }
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default Home;
