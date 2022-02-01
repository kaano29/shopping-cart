import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter'

function App() {
  return (
    <div>
      <CartHeader />
      <CartItems />
      <CartFooter copyright="2016" />
    </div>
  )
}

export default App;
