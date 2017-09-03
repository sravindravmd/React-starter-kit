/**
 * Created by ravindras on 29/08/17.
 */
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <nav className="navbar navbar bg-light">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;