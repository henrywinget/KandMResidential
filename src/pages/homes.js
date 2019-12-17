import React, { Component } from "react";
import Helmet from "../components/helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeLanding from "../components/homeLanding";

class Homes extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Navbar />
        <HomeLanding/>
        <Footer />
      </div>
    );
  }
}

export default Homes;