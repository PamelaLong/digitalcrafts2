import React, { Component } from "react";

export default class CarCard extends Component {

  state = {
    make: "Bugatti",
    model: "La voiture noire",
    engine: "v16",
    horsepower: "1500",
    price: "19000000",
    transmission: "7 speed dual clutch",
    topSpeed: [{ US: "261", Metric: "420" }],
    image: [
      {
        primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
        secondary:
        "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg"      
      }
  ],
  };
//   make = () => {
//     this.setState({ make: this.state.make });
// };
//   model = () => {
//     this.setState({ model: this.state.model });
// };
// changeImage = () => {
//   let changeImage = "secondary"
//   this.setState({img: secondary});
// };

render () {
      return (
          <div>
            <div className ="Bugatti"></div>
            <h1>hello</h1>
              {/* <p>make = {this.state.make}</p>
              <p>model: {this.state.model}</p>
              <p>engine: {this.state.engine}</p>
              <p>horsepower: {this.state.horsepower}</p>
              <p>price: {this.state.price}</p>
              <p>transmission: {this.state.transmission}</p>
              <p>topSpeed: {this.state.topSpeed}</p>
              <img>
              primary: {"https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"},
              secondary:
          {"https://www.carscoops.com/wp-content/uploads/2019/03/c64f9e1e-bugatti-la-voiture-noire-roadster-rendering-0-1024x554.jpg"},</img>
          <button onClick={this.changeImage}>Change Image</button> */}
          </div>
      );
    };
  };