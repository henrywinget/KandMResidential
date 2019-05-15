import React from "react";
import { FaGithub, FaHandHoldingHeart } from "react-icons/fa";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradientBg is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <div className="columns">
                <h3
                  className="is-size-3 has-text-link"
                  style={{ textAlign: "center" }}
                >
                  <a style={{ textAlign: "center" }}>
                    Learn about the BJB Memorial Fund
                  </a>
                </h3>
              </div>
              <div className="columns donate-here">
                <a
                  class="button is-link is-large is-rounded is-outlined donate-here-link"
                  href="https://secure.donationpay.org/charitysmith/give5.php?f=bjb-memorial-fund"
                >
                  <span>
                    <FaHandHoldingHeart /> Donate
                  </span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
