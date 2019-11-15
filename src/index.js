import React from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Store from "./store/store.js";

import "./styles.css";
import Home from "./components/home/home";
import Header from "./components/header";
import About from "./components/about/about.js";

import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
