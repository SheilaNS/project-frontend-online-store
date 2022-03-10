import React from 'react';
import Header from './Header';
import * as api from '../services/api';
import '../assets/Home.css';

class Home extends React.Component {
  componentDidMount() {
    this.handlePromises();
  }

  handlePromises = async () => {
    await api.getCategories();
    await api.getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <>
        <Header />
        <div className="search-box">
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar"
            />
          </label>
        </div>

        <p
          data-testid="home-initial-message"
          className="intro-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default Home;
