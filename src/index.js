import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Chart from "./components/chart";
import About from "./components/about";
import Footer from "./components/footer";

const MyApp = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/chart" component={Chart} />
    <Route path="/about" component={About} />
    <Footer />
  </Router>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
