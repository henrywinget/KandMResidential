import React from "react";
import { FaGithub, FaHandHoldingHeart, FaHardHat } from "react-icons/fa";
import Clear from "react-reveal/Fade";

import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradientBg is-fullheight">
    {/* <Navbar /> */}
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <Clear>
            <div className="media-content bjb-content">
              <div className="content" style={{ textAlign: "center" }}>
                <div className="columns">
                  <h1 className="is-size-1 kandm-header">
                    K & M Residential Solutions
                  </h1>
                </div>
                <div className="columns center">
                  <a
                    className="is-size-4"
                    // style={{ textAlign: "center" }}
                  >
                    Learn about the BJB Memorial Fund
                  </a>
                </div>
                <div className="columns donate-here">
                  <a
                    className="button is-medium is-rounded is-outlined donate-here-link"
                    href="https://secure.donationpay.org/charitysmith/give5.php?f=bjb-memorial-fund"
                  >
                    <span>
                      <FaHandHoldingHeart /> Donate
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Clear>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
