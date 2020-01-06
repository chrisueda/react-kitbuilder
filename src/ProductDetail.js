import React from "react";
import products from "./sample-products";
import { partial } from "./lib/utils";

const ProductDetail = props => {
  const addToOrder = partial(props.addToOrder, props.category, props.id);

  return (
    <div>
      <h3>{products[props.id].name}</h3>
      <p>{products[props.id].desc}</p>
      <button onClick={addToOrder}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
