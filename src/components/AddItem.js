

let quantity = 0
let product = {}

const AddItem = ({ products, onSubmit }) => (
    <div className="container">
        <label className="mt-5 mb-2">Quantity</label>
        <input className="form-control" type="number" name="quantityInput" onChange={e => quantity += parseInt(e.target.value)} />

        <label className="mt-2 mb-2">Products</label>
        <select className="form-control" id="products" select="none" name="productSelection" onChange={e => product = JSON.parse(e.target.value)} required>
            <option disabled selected value> -- select a product -- </option>
            {products.map(product => <option key={product.id} value={JSON.stringify(product)}>{product.name}</option>)}
        </select>

        <button className="btn btn-primary mt-3 mb-3" type="submit" onClick={e => onSubmit(e, { product, quantity })} >Submit</button>
    </div>)

export default AddItem