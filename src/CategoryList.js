import React from "react";
import Category from "./Category";

const CategoryList = ({ kit, chooseCategory, currentCategory }) => {
  return kit ? (
    <section>
      <h2>{kit.name}</h2>
      <h3>${kit.price}</h3>
      {kit.categories.map((category, idx) => {
        return (
          <Category
            key={category.title}
            category={category}
            idx={idx}
            chooseCategory={chooseCategory}
            currentCategory={currentCategory}
          />
        );
      })}
    </section>
  ) : (
    <section>
      <h3>Please choose a kit</h3>
    </section>
  );
};

export default CategoryList;
