import React from "react";

const Order = props => {
  return (
    <section>
      {Object.keys(props.order).map(key => (
        <li key={key}>
          <span>{props.kit.categories[key].title}: </span>
          {props.order[key]}
        </li>
      ))}
    </section>
  );
};

export default Order;
