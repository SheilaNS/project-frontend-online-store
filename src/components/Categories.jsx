import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <nav className="nav-categories">
        { categories.map((element, index) => {
          '';

          return (
            <div data-testid="category" key={ index }>
              { element.name }
            </div>
          );
        })}
      </nav>
    );
  }
}

Categories.propTypes = {
  Categories: PropTypes.array,
}.isRequired;

export default Categories;
