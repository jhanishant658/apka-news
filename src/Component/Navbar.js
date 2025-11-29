import React, { Component  } from 'react';
import './Navbar.css'; // Ensure you have this CSS file
import { Link } from 'react-router-dom';
class Navbar extends Component {
 
  render() {
   
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#343a40' }}>
        <Link  className="navbar-brand m-0 logo" to="/">
          APKA-NEWS
        </Link >
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-1" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active pl-4 ">
              <Link  className="nav-link" to="/">Home</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/Sports">Sports</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/Business">Business</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/Cricket">Cricket</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/technology">technology</Link >
            </li>
           
          </ul>
          
        </div>
      </nav>
    );
  }
}


export default Navbar;
