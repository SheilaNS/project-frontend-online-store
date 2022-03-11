import React from 'react';
import * as api from '../services/api';
import Header from './Header';
import '../assets/Home.css';
import Categories from './Categories';
import Search from './Search';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleCategories();
    this.handleCategoryAndQuery();
  }

  handleCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
    console.log(categories);
    return categories;
  }

  handleCategoryAndQuery = async () => {
    const categorieAndQuery = await api.getProductsFromCategoryAndQuery();
    return categorieAndQuery;
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <Header />

        <section className="content">
          <Search />
          <Categories categories={ categories } />
        </section>
      </>
    );
  }
}

export default Home;
