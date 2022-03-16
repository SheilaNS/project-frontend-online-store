import React from 'react';
import PropTypes from 'prop-types';

class EvaluationList extends React.Component {
  render() {
    const { data: { email, evaluation, rate } } = this.props;
    const number = 5;
    return (
      <>
        <p data-testid="product-detail-email">{ email }</p>
        <div>
          {[...Array(number)].map((_element, index) => (
            <input
              key={ index }
              data-testid={ `${index + 1}-rating` }
              id="rate"
              name="rate"
              value={ index }
              type="checkbox"
              checked={ index + 1 < rate }
            />))}
        </div>
        <p data-testid="product-detail-evaluation">{ evaluation }</p>
      </>
    );
  }
}

EvaluationList.propTypes = {
  array: PropTypes.array,
  email: PropTypes.string,
  evaluation: PropTypes.string,
  rate: PropTypes.number,
}.isRequired;

export default EvaluationList;
