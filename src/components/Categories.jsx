import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Home.css';

class Categories extends React.Component {
  render() {
    const { categories, onClick } = this.props;
    return (
      <nav className="nav-categories">
        { categories.map((element, index) => {
          '';

          return (

          /*
            Referências para correção no erro da DIV:

            https://stackoverflow.com/questions/54274473/how-to-fix-static-html-elements-with-event-handlers-require-a-role

            https://stackoverflow.com/questions/56441825/how-to-fix-button-interactive-role-must-be-focusable
          */

            <div
              id={ element.id }
              data-testid="category"
              onClick={ onClick }
              key={ index }
              role="button"
              tabIndex={ index }
              onKeyDown={ onClick }
            >
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
