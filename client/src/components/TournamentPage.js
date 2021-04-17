import '../styles/App.css';
import Header from './Header.js';

function TournamentPage(props) {
  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
    </div>
  );
}

export default TournamentPage;