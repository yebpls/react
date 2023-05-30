import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    // Khai báo tất cả state của component
    this.state = {
      count: 0,
      animals: ["dog", "cat"],
    };
  }

  handleIncrement = () => {
    // this.state.count++

    // Không được thay đổi trực tiếp state mà phải thông qua phương thức setState
    this.setState({ count: this.state.count + 1 });
  };

  handleAddAnimal = () => {
    const value = prompt("Input animal");
    this.setState({ animals: [...this.state.animals, value] });
  };

  handleRemoveAnimal = () => {
    const value = prompt("Input animal");
    const newAnimals = this.state.animals.filter((item) => item !== value);
    this.setState({ animals: newAnimals });
  };

  render() {
    console.log("props:", this.props);
    console.log("state:", this.state);

    return (
      <div>
        <h1>State</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>

        <hr />

        <p>Animals: {this.state.animals.join(", ")}</p>
        <button onClick={this.handleAddAnimal}>Add</button>
        <button onClick={this.handleRemoveAnimal}>Remove</button>
      </div>
    );
  }
}
