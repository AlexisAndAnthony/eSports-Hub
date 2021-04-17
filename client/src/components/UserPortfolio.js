import '../styles/App.css';
import Header from './Header.js';

function UserPortfolio(props) {
  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
    </div>
  );
}

export default UserPortfolio;