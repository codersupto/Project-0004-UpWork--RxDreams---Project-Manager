import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import React from "react";
import FastLanes from "./components/FastLanes/FastLanes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollByRef = React.createRef();
  }

  render() {
    return (
      <>
        <Header />
        <Banner scrollByRef={this.scrollByRef} />
        <FastLanes ref={this.scrollByRef} />
      </>
    );
  }
}
export default App;
