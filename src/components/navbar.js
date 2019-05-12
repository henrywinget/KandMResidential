import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item"
						href="/" >
						{/* <img src={gatsbyLogo} alt="Logo-1" />
						<img src={bulmaLogo} alt="Logo-2" /> */}
						<h1 className="work-pls">K & M Residential Solutions</h1>
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end">
						<span className="navbar-item">
							<a href="#" >
								<span>Home</span>
							</a>
						</span>
					</div>
					<div className="navbar">
						<span className="navbar-item">
							<a href="#" >
								<span>About</span>
							</a>
						</span>
					</div>
					<div className="navbar">
						<span className="navbar-item">
							<a href="#" >
								<span>Donate</span>
							</a>
						</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
