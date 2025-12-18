export const List = () => {
    const productList = [{
        id: 1, name: 'Product 1', price: 100
    },{
        id: 2, name: 'Product 2', price: 200
    },{
        id: 3, name: 'Product 3', price: 300
    },{
        id: 4, name: 'Product 4', price: 400
    }];
    return (
        <div>
            <h2>Product List</h2>
            {
                productList.filter((product) => {
                    return product.price > 200
                }
                ).map((product) => {
                    return <p>{product.name}</p>
                })
            }
        </div>
    )
}