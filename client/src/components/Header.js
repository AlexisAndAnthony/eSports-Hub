import '../styles/App.css';
import { Link, useLocation } from "react-router-dom";
import React from 'react';

function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="title-group">
        <Link to="/" style={{ textDecoration: 'none' }}><h1>eSports Hub</h1></Link>
        <p>Your one-stop-shop for eSports connections.</p>
      </div>
      <div className="nav-bar">
        <NavBar isSignedIn={props.isSignedIn} selectedLink={location.pathname}/>
      </div>
    </header>
  )
}

function NavBar(props) {
  return (
    <div className="nav-bar">
      <div className="nav-links">
        <NavLink to="/feed" label="FEED" />
        <NavLink to="/portfolios" label="PORTFOLIOS" />
        <NavLink to="/recruitment" label="ESPORTS RECRUITMENT" />
        <NavLink to="/groups" label="GROUPS & SCRIMS" />
        <NavLink to="/tournaments" label="TOURNAMENTS" />
      </div>
      {!props.isSignedIn
        ? <SignInButton />
        : <p></p>
      }
    </div> 
  )
}

function NavLink(props) {
  <Link 
    to={props.to}
    style={{ textDecoration: 'none' }}
    id={props.selectedLink === props.to ? "selected-link" : <React.Fragment />}
  >
    <p>{props.label}</p>
  </Link>
}

function SignInButton() {
  return (
    <Link to="/signup">
      <button className="sign-in-button">
        SIGN UP
      </button>
    </Link>
  )
}

export default Header;
  