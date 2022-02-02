
const Total = ({ total }) => {

    total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total / 100)

    return (
        <div className="container">
            <label className="mt-3 mb-1 me-2 ">Total:</label>
            <label className="mt-3 mb-1">{total}</label>
        </div>
    )
}

export default Total