
import { Component } from 'react'

class AddItem extends Component {

    state = { quantity: "", product: {} }

    updateQuantity = e => this.setState({ quantity: e.target.value })

    updateProduct = e => {
        this.setState({ product: JSON.parse(e.target.value) })
    }
    submitForm = (e) => {
        const item = { product: this.state.product, quantity: this.state.quantity }
        this.setState({ quantity: "" })
        this.props.onSubmit(e, item)
    }

    render() {

        return (
            <div className="container">
                <label className="mt-5 mb-2">Quantity</label>
                <input
                    className="form-control"
                    type="number"
                    value={this.state.quantity}
                    onChange={e => this.updateQuantity(e)}
                />

                <label className="mt-2 mb-2">Products</label>
                <select
                    className="form-control"
                    value={JSON.stringify(this.state.product)}
                    id="products"
                    onChange={e => this.updateProduct(e)}
                >
                    <option value={"{}"} disabled> -- select a product -- </option>
                    {this.props.products.map(product =>
                        <option
                            key={product.id}
                            value={JSON.stringify(product)}>{product.name}
                        </option>)
                    }
                </select>

                <button
                    className="btn btn-primary mt-3 mb-3"
                    type="submit"
                    onClick={e => this.submitForm(e)}
                >Submit
                </button>
            </div>
        )
    }

}

export default AddItem