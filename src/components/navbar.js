import React from "react";

import "./style.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <h1 className="work-pls">K&M Residential Solutions</h1>
              </a>
              <a
                role="button"
                className={
                  this.state.isOpen
                    ? "navbar-burger is-active"
                    : "navbar-burger"
                }
                aria-label="menu"
                aria-expanded="false"
                name="isOpen"
                onClick={this.toggle}
                data-target="navbarMenuHeroA"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div
              id="navbarMenuHeroA"
              className={
                this.state.isOpen ? "navbar-menu is-active" : "navbar-menu"
              }
            >
              <div className="navbar">
                <span className="navbar-item">
                  <a href="/">
                    <span>About</span>
                  </a>
                </span>
              </div>
              <div className="navbar-end">
                <span className="navbar-item">
                  <a href="/homes">
                    <span>K&M Homes</span>
                  </a>
                </span>
              </div>
              <div className="navbar">
                <span className="navbar-item">
                  <a href="/frequently-asked-questions">
                    <span>FAQ</span>
                  </a>
                </span>
              </div>
              <div className="navbar">
                <span className="navbar-item">
                  <a href="/donate">
                    <span>Donate</span>
                  </a>
                </span>
              </div>
              <div className="navbar">
                <span className="navbar-item">
                  <a href="/contact">
                    <span>Contact</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
