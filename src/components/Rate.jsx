import React from 'react';

class Rate extends React.Component {
  handleClick = ({ target }) => {
    const position = target.value;
    const arrayBox = target.parentNode.childNodes;
    arrayBox.forEach((element, index) => {
      if (index <= position) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }

  render() {
    const number = 5;
    return (
      <div>
        {[...Array(number)].map((_element, index) => (
          <input
            key={ index }
            data-testid={ `${index + 1}-rating` }
            id="rate"
            name="rate"
            value={ index }
            type="checkbox"
            onClick={ this.handleClick }
          />))}
      </div>
    );
  }
}

export default Rate;
