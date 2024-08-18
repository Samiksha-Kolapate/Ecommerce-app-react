/* import React from "react";
import ProductList from "../components/ProductList.jsx";

class ProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
               
            ],
            cartCount:0,
            cart : [],
            productList : []
        };

    this.getProducts =  this.getProducts.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);

    }

    componentDidMount(){
        console.log("Mounted");
        this.getProducts();
    } 

    componentDidUpdate(){
        console.log("Updated")
    }

    
    getProducts(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                this.setState({products : data});
            });
    }

    handleAddToCart(){
        const { cartCount } = this.state;
        this.setState({ cartCount : cartCount + 1})
    }
    


    render() {
        const { products,cartCount } = this.state;
        
        return (
            <>
                <div>
                    <h1>Product <span>Cart count : {cartCount}</span></h1>

                    <div>
                        <ProductList products={products} handleAddToCart={this.handleAddToCart} />
                        <Header products={products} handleAddToCart={this.handleAddToCart} />
                    </div>
                </div>
            </>
        );
    }
}


export default ProductContainer;  */