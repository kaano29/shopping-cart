import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter'
import { render } from '@testing-library/react';


function App() {

  const cartItemsList = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]

  return (
    <div>
      <CartHeader />
      <CartItems itemList={cartItemsList} />
      <CartFooter copyright="2016" />
    </div>
  )
}

export default App;