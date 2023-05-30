// rcc
import React, { Component } from "react";
import State from "./State";
import Lifecycle from "./Lifecycle";

export default class Class extends Component {
  render() {
    return (
      <div>
        <h1>Class</h1>

        <State />

        <Lifecycle />
      </div>
    );
  }
}
