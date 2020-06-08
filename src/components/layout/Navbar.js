import React from 'react';
import PropTypes from 'prop-types';
// Curly braces to export not default comps
import { Link } from 'react-router-dom';

// Destructuring
const Navbar = ({ icon, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<Link to='/'>Home</Link>
				<Link to='about'>About</Link>
			</ul>
		</nav>
	);
};
//  We  do not use a tags for links because it is client side

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fa fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
