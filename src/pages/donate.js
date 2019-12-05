import React, { Component } from "react";
import Helmet from "../components/helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import DonateForm from '../components/donateForm';

class Donate extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Navbar />
        <DonateForm/>
        <Footer />
      </div>
    );
  }
}

export default Donate;