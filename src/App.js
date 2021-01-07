import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import React from "react";
import Why from "./components/Why/Why";
// import FastLanes from "./components/FastLanes/FastLanes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollByRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mx-auto bg-red-900">supto</div>
        <Header />
        <Banner scrollByRef={this.scrollByRef} />
        {/*<FastLanes ref={this.scrollByRef} />*/}
        <Why />
      </React.Fragment>
    );
  }
}
export default App;
