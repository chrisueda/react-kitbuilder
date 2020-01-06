import React from "react";

const Category = props => {
  return (
    <div>
      <h3>{props.category.title}</h3>
      <button onClick={() => props.chooseCategory(props.idx)}>
        Select category
      </button>
    </div>
  );
};

export default Category;
