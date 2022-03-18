import React from 'react';
import Header from './Header';

class CheckoutPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <ol>lista teste</ol>
          <p> valor teste </p>
        </div>

        <form>
          <label htmlFor="nome">
            Nome:
            <input id="nome" data-testid="checkout-fullname" type="text" />
          </label>
          <label htmlFor="email">
            Email:
            <input id="email" data-testid="checkout-email" type="email" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input id="cpf" data-testid="checkout-cpf" type="text" />
          </label>
          <label htmlFor="pnone">
            Telefone:
            <input id="phone" data-testid="checkout-phone" type="text" />
          </label>
          <label htmlFor="cep">
            Cep:
            <input id="cep" data-testid="checkout-cep" type="text" />
          </label>
          <label htmlFor="address">
            Endereço:
            <input data-testid="checkout-address" type="text" />
          </label>

        </form>
      </>
    );
  }
}

export default CheckoutPage;
