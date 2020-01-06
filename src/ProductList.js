import React, { Component } from "react";
import ProductDetail from "./ProductDetail";

export default class ProductList extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.category.title}</h2>
        {this.props.category.products.map(id => {
          return (
            <ProductDetail
              addToOrder={this.props.addToOrder}
              key={id}
              id={id}
              title={this.props.category.title}
              category={this.props.currentCategory}
            />
          );
        })}
      </section>
    );
  }
}
