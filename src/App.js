import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FastLanes from "./components/FastLanes/FastLanes";
import Why from "./components/Why/Why";
import BlissWay from "./components/BlissWay/BlissWay";
import NewTake from "./components/NewTake/NewTake";
import TheWay from "./components/TheWay/TheWay";
import HowBlissway from "./components/HowBlissway/HowBlissway";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollByRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner scrollByRef={this.scrollByRef} />
        <FastLanes ref={this.scrollByRef} />
        <Why />
        <BlissWay />
        <NewTake />
        <TheWay />
        <HowBlissway />
        <Schedule />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
