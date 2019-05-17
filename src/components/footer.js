import React from "react";
import { FaHardHat } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Emoji from "./emoji";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center has-background-light">
        <div className="container">
          <div className="under-construction">
            <p>
              <FaHardHat /> Site under construction
            </p>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
