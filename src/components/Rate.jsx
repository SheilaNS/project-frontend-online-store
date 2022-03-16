import React from 'react';
import PropTypes from 'prop-types';

class Rate extends React.Component {
  render() {
    const { array, handleClick } = this.props;
    return (
      <div>
        {array.map((_element, index) => (
          <input
            key={ index }
            className="rate"
            data-testid={ `${index + 1}-rating` }
            id="rate"
            name="rate"
            value={ index }
            type="checkbox"
            onClick={ handleClick }
            // checked={  }
          />))}
      </div>
    );
  }
}

Rate.propTypes = {
  array: PropTypes.array,
  handleClick: PropTypes.func,
}.isRequired;

export default Rate;
