import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
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
          <div className="columns">
            <div className="column is-one-third">
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
            </div>
            <div className="column is-one-third">
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
            </div>
            <div className="column is-one-third">
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
              <h3>Lorem</h3>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
