import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="heading">
        <div className="heading-title">
          {this.props.count} products are available.
        </div>
        {/* we ll see the number of products at the top of our page */}
        <div className="heading-content">
          <label>
            {/* filter by price */}
            Order by:
            <select
              className="form-control"
              value={this.props.sort}
              onChange={
                this.props.handleChangeSort
              } /* handle it in the app.js */
            >
              <option value="">Select</option>
              <option value="lowest">Lowest to Highest Price</option>
              <option value="highest">Highest to Lowest Price</option>
            </select>
          </label>

          <label>
            {/* filter by id */}
            Filter Size:
            <select
              className="form-control"
              value={this.props.size}
              onChange={
                this.props.handleChangeSize
              } /* handle the function in the app.js */
            >
              <option value="">Select</option>
              <option value="">ALL</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
