import React from "react";
import "./App.css";
import DarkMode from "./components/darkmode/DarkMode";
import { GlobalState } from "./redux/types";
import { getDarkMode } from "./redux/selectors";
import { connect } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

interface AppProps {
  darkMode: boolean;
}

function mapStateToProps(state: GlobalState): AppProps {
  return {
    darkMode: getDarkMode(state),
  };
}

function App(props: AppProps) {
  return (
    <div className={`app ${props.darkMode ? "app--dark-mode" : ""}`}>
      <DarkMode />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default connect(mapStateToProps)(App);
