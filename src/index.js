import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Chart from "./components/chart";
import Peta from "./components/peta";
import Footer from "./components/footer";
import About from "./components/about";
import NewApp from "./App";

const MyApp = () => (
  <Router>
    <Route exact path="/" component={NewApp} />
    <Route path="/chart" component={Chart} />
    <Route path="/peta" component={Peta} />
    <Route path="/about" component={About} />
    <Footer />
  </Router>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
