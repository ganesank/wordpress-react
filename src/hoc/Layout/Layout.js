import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Aux from "../Auxiliary/Auxiliary";

// TODO: add other sections/components between <Aux></Aux>
class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main className="fullscreen">{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  error: null,
  loading: false
});

export default connect(mapStateToProps)(Layout);
