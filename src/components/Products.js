import React, { Component } from "react";
//import currency from "../currency";

class Products extends Component {
  render() {
    const productsItems = this.props.products.map(product => (
      <div className="list-products" key={product.id}>
        <a
          href={`#${product.id}`}
          onClick={e => this.props.handleAddToCart(e, product)}
        >
          <img src={`/products/${product.sku}`} alt={product.title} />
          <p>{product.title}</p>
        </a>
      </div>
    ));
    return <div className="frame-products">{productsItems}</div>;
  }
}
export default Products;
