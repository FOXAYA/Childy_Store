import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nbar from "./Compontent/Header/Navbar";
// import Home from "./Compontent/Home/Carousel";
import Svg from "./Compontent/Header/Test";
import "./App.css";
class App extends Component {
  render() {
    return (
      <>
        <Nbar />
        <Svg />
      </>
    );
  }
}
export default App;
