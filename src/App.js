import './App.css';
import { Component } from 'react';
import CartHeader from './components/CartHeader'
import ShoppingCart from './components/ShoppingCart'
import CartFooter from './components/CartFooter'

class App extends Component {

  render() {
    return (
      <div>
        <CartHeader />
        <ShoppingCart />
        <CartFooter copyright="2016" />
      </div >
    )
  }

}

export default App
