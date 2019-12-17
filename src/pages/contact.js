import React, { Component } from "react";
import Helmet from "../components/helmet";
// import Header from "../components/header";
// import Midsection from "../components/midsection";
import ContactForm from '../components/contactForm';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ContactHeader from "../components/contactHeader";
// import Faq from '../components/faq';

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet />
        <Navbar />
        <ContactHeader/>
        <ContactForm/>
        <Footer />
      </div>
    );
  }
}

export default Contact;