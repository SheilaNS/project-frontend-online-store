import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Search.css';

class Search extends React.Component {
  render() {
    const { onChange, onClick, value } = this.props;
    return (
      <section className="search-main">
        <div className="search-box">
          <label htmlFor="search">
            <input
              type="text"
              name="searchInput"
              id="search"
              value={ value }
              onChange={ onChange }
              data-testid="query-input"
              placeholder="Pesquisar"
            />
          </label>

          <button
            className="button-search"
            data-testid="query-button"
            type="button"
            onClick={ onClick }
          >
            Pesquisar
          </button>
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

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
