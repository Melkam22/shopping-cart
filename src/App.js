import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./Filter-product";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: []
    };
  }
  componentWillMount() {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
          filteredProducts: data
        })
      );
  }
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    });
  };

  render() {
    return (
      <div className="App">
        <div className="main">
          <h3>Online-shopping platform</h3>
          <div className="heading">
            <Filter
              size={this.state.size}
              sort={this.state.sort}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort}
              count={this.state.filteredProducts.length}
            />
          </div>
          <div className="frame-products">
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>

          {/* main
          <div className="headings">
            heading
            <div className="frame-content">
              frame-content
              <div className="content">
                content
                {/* <div className="one">one</div>
                <div className="two">two</div>
                <div className="three">three</div>
                <div className="four">four</div>
                <div className="five">five</div>
                <div className="six">six</div> 
              </div>
              <div className="basket"></div>
            </div>
            <div className="footer">footer</div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
