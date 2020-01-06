import React, { Component } from "react";
import Kit from "./Kit";

class KitList extends Component {
  render() {
    return (
      <section>
        <ul>
          {this.props.kits.map(kit => {
            console.log(kit);
            return (
              <Kit key={kit.id} {...kit} chooseKit={this.props.chooseKit} />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default KitList;
