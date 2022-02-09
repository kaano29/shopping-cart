import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter'
import { Component } from 'react';
import AddItem from './components/AddItem';
import Total from './components/Total';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

class App extends Component {

  state = {
    products: [],
    cartItems: []
  }

  onAddItem = (e, item) => {
    e.preventDefault()
    let id = this.state.cartItems.length + 1
    let newItem = { id: id, product: item.product, quantity: item.quantity }
    this.setState({ cartItems: [...this.state.cartItems, newItem] })
  }

  calculateTotal = () => {
    if (this.state.cartItems == 0)
      return 0

    return this.state.cartItems
      .map(item => item.product.priceInCents * item.quantity)
      .reduce((prev, curr) => prev + curr)
  }

  createItems = (itemsJSON, productsJSON) => {

    const items = itemsJSON.map(item => {
      const product = productsJSON.find(p => p.id === item.product_id)
      return {id: item.id, product, quantity: item.quantity}
    })
    return items
  }

  // - GET: `http://localhost:8082/api/items`
  async componentDidMount() {
    const productsResult = await fetch("http://localhost:8082/api/products")
    const products = await productsResult.json()

    const itemsResult = await fetch("http://localhost:8082/api/items")
    const itemsJSON = await itemsResult.json()

    const cartItems = this.createItems(itemsJSON, products)
    this.setState({products, cartItems})
  }

  render() {

    return (
      <div>
        <CartHeader />
        <CartItems itemList={this.state.cartItems} />
        <Total total={this.calculateTotal()} />
        <AddItem products={this.state.products} onSubmit={this.onAddItem} />
        <CartFooter copyright="2016" />
      </div >
    )
  }

}

export default App
