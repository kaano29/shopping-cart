
import CartItem from './CartItem'

const CartItems = ({ itemList }) => {

    let items = itemList.map(
        item => <CartItem key={item.id} id={item.product.id} name={item.product.name} priceInCents={item.product.priceInCents} quantity={item.quantity} />
    );

    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {items}
            </div>
        </div>
    )
}

export default CartItems