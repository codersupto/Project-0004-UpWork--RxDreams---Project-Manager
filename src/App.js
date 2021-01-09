import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Spinner from "./components/Spinner/Spinner";

const Why = React.lazy(() => import("./components/Why/Why"));
const BlissWay = React.lazy(() => import("./components/BlissWay/BlissWay"));
const NewTake = React.lazy(() => import("./components/NewTake/NewTake"));
const TheWay = React.lazy(() => import("./components/TheWay/TheWay"));
const HowBlissway = React.lazy(() =>
  import("./components/HowBlissway/HowBlissway")
);
const Schedule = React.lazy(() => import("./components/Schedule/Schedule"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const FastLanes = React.lazy(() => import("./components/FastLanes/FastLanes"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollByRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <React.Suspense fallback={<Spinner />}>
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
        </React.Suspense>
      </React.Fragment>
    );
  }
}
export default App;
