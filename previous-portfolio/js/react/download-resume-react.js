import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarPage from "./nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Layout from "./component/Layout";
// import "bootstrap/dist/css/bootstrap.min.css";
import LeftBox from "./component/leftBox";
import SecTab from "./component/secTab";
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBarPage />
          {/* <hr /> */}
          {/* <LeftBox /> */}
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/secTab" component={SecTab} />
              <Route Component={NoMatch} />
            </Switch>
          </Layout>
        </>
      </Router>
    );
  }
}
export default index;
