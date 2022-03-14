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
    // this.handleCategoryAndQuery();
    // this.handleProduct();
    // this.handleQuery();
  }

  handleCategories = async () => {
    const categories = await api.getCategories();
    // console.log(categories);
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

  handleQuery = async () => {
    const { searchInput } = this.state;
    const query = await api.getQuery(searchInput);
    this.setState({
      searchResult: query.results,
    });
    return query;
  }

  handleGetByCategory = async (categoryId) => {
    const category = await api.getByCategory(categoryId);
    // console.log(category);
    return category;
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick = async ({ target }) => {
    // outra possibilidade: target.getAttribute('id')
    const categoryItems = await this.handleGetByCategory(target.id);
    this.setState({
      searchResult: categoryItems.results,
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
            <Categories onClick={ this.handleClick } categories={ categories } />
            <div className="cards">
              {
                searchResult !== undefined && searchResult
                  .map((element) => (<CardList
                    key={ element.id }
                    id={ element.id }
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
