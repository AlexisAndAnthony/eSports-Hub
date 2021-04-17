import '../styles/App.css';
import Header from './Header.js';

function RecruitmentPage(props) {
  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
    </div>
  );
}

export default RecruitmentPage;