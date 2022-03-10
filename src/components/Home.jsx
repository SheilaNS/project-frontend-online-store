import React from 'react';
import * as api from '../services/api';

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
        <div>
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
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

export default Home;
