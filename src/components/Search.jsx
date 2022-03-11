import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <section className="search-main">
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
      </section>
    );
  }
}

export default Search;
