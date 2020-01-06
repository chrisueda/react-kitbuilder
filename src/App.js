import React from "react";
import "./App.css";

import KitList from "./KitList";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Order from "./Order";
import { loadKits } from "./lib/kitService";
import { findById } from "./lib/kitHelpers";

class App extends React.Component {
  state = {
    kits: [],
    order: {},
    currentKit: null,
    currentCategory: 0
  };

  componentDidMount() {
    loadKits().then(kits => this.setState({ kits }));
  }

  chooseKit = id => {
    this.setState({ currentKit: id, currentCategory: 0, order: {} });
  };

  chooseCategory = idx => {
    this.setState({ currentCategory: idx });
  };

  addToOrder = (category, id) => {
    const order = { ...this.state.order };
    order[category] = id;
    this.setState({ order });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kitbuilder</h1>
        </header>
        <main>
          <KitList kits={this.state.kits} chooseKit={this.chooseKit} />
          <CategoryList
            kit={this.state.kits[this.state.currentKit]}
            chooseCategory={this.chooseCategory}
            currentCategory={this.state.currentCategory}
          />
          {this.state.currentKit && (
            <ProductList
              currentCategory={this.state.currentCategory}
              category={
                this.state.kits[this.state.currentKit].categories[
                  this.state.currentCategory
                ]
              }
              addToOrder={this.addToOrder}
            />
          )}
          {Object.keys(this.state.order).length !== 0 && (
            <Order
              order={this.state.order}
              kit={
                this.state.currentKit
                  ? this.state.kits[this.state.currentKit]
                  : ""
              }
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
