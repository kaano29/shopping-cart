
const CartItem = ({ id, name, priceInCents, quantity }) => {

    priceInCents = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(priceInCents / 100)

    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">{name}</div>
                <div className="col-md-2">{priceInCents}</div>
                <div className="col-md-2">{quantity}</div>
            </div>
        </div>
    )
}

export default CartItem