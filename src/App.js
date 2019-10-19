import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from "./hoc/Layout/Layout";
import { OnRouteValidate } from './shared/utility';
import appLogo from './assets/appLogo.svg';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import Docs from "./containers/Documentation/Documentation";



class App extends Component {
  constructor(props) {
    super(props);

    // updating the state
    this.state = {
      splashLoaded: false
    };
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    });
    if (sessionStorage.getItem("splashLoaded")) {
      this.setState({ splashLoaded: true });
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashLoaded: true });
      sessionStorage.setItem("splashLoaded", "true");
    }, 4000);
  }
  componentWillUnmount() {
    this.unlisten();
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };
  render() {
  //   const { loading, msg } = this.state;
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/docs" exact component={Docs} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header> 
        
        <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <br />
        <span>{msg}</span>
      </p>*/}
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  error: null,
  loading: false
});

export default withRouter(connect(mapStateToProps)(App));
