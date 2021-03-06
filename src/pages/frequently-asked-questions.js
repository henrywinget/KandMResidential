import React, { Component } from "react";
import Helmet from "../components/helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Faq from '../components/faq';

class FrequentlyAskedQuestions extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Navbar />
        <Faq/>
        <Footer />
      </div>
    );
  }
}

export default FrequentlyAskedQuestions;