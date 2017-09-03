import React from "react";
import { Link } from 'react-router';

class HomePage extends React.Component {

  render() {
    return(
      <div className="jumbotron">
        <h1>React Training Administration</h1>
        <p>React and React Router ultra-responsive web application</p>
        <Link to="about"  className="btn btn-primary btn-lg">About</Link>
      </div>
    );
  }
}

export default HomePage;