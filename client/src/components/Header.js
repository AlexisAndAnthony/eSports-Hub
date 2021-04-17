import '../styles/App.css';
import { Link } from "react-router-dom";

function Header(props) {
    return (
      <header className="header">
        <div className="title-group">
          <Link to="/" style={{ textDecoration: 'none' }}><h1>eSports Hub</h1></Link>
          <p>Your one-stop-shop for eSports connections.</p>
        </div>
        <div className="nav-bar">
          <NavBar isSignedIn={props.isSignedIn}/>
        </div>
      </header>
    )
  }

  function NavBar(props) {
    return (
      <div className="nav-bar">
        <div className="nav-links">
          <Link to="/feed" style={{ textDecoration: 'none' }}><p>FEED</p></Link>
          <Link to="/portfolios" style={{ textDecoration: 'none' }}><p>PORTFOLIOS</p></Link>
          <Link to="/recruitment" style={{ textDecoration: 'none' }}><p>ESPORTS RECRUITMENT</p></Link>
          <Link to="/groups" style={{ textDecoration: 'none' }}><p>GROUPS & SCRIMS</p></Link>
          <Link to="/tournaments" style={{ textDecoration: 'none' }}><p>TOURNAMENTS</p></Link>
        </div>
        {!props.isSignedIn
          ? <SignInButton />
          : <p></p>
        }
      </div> 
    )
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
  