import { Component } from 'react';
import AddItem from './AddItem';
import Total from './Total';
import CartItems from './CartItems';

class ShoppingCart extends Component {

    state = {
        products: [],
        cartItems: []
    }

    calculateTotal = () => {
        if (this.state.cartItems == 0)
            return 0

        return this.state.cartItems
            .map(item => item.product.priceInCents * item.quantity)
            .reduce((prev, curr) => prev + curr)
    }

    onAddItem = (e, item) => {
        e.preventDefault()
        const id = this.state.cartItems.length + 1
        const newItem = { product_id: item.product.id, quantity: item.quantity, id }
        this.postItem(newItem)
    }

    postItem = async (item) => {
        const response = await fetch(process.env.REACT_APP_API_ITEMS, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "accept": 'application/json'
            },
            "body": JSON.stringify(item)
        })
        const newItem = await response.json()
        this.setState({ cartItems: [...this.state.cartItems, this.parseItem(newItem)] })
    }

    parseItem = (item) => {
        const product = this.state.products.find(p => p.id === item.product_id)
        return { id: item.id, product, quantity: item.quantity }
    }

    fetchProducts = async () => {
        const response = await fetch(process.env.REACT_APP_API_PRODUCTS)
        const products = await response.json()
        this.setState({ products })
    }
    
    fetchItems = async () => {
        const response = await fetch(process.env.REACT_APP_API_ITEMS)
        const items = await response.json()
        this.setState({ cartItems: items.map(i => this.parseItem(i)) })
    }

    componentDidMount() {
        this.fetchProducts().then(() => this.fetchItems())
    }

    render() {

        return (<>
            <CartItems itemList={this.state.cartItems} />
            <Total total={this.calculateTotal()} />
            <AddItem products={this.state.products} onSubmit={this.onAddItem} />
        </>)
    }

}

export default ShoppingCart