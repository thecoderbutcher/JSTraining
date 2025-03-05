
const ProductList = () => {
    const products = [
        {id:1, name:"Laptop", price:"$1200", availability: "In stock"},
        {id:2, name:"Phone", price:"$800", availability: "In stock"},
        {id:3, name:"Tablet", price:"$600", availability: "In stock"},
    ]
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Availability: {product.availability}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductList