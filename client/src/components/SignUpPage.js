import '../styles/App.css';
import '../styles/SignIn.css';
import Header from './Header.js';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div className="App">
      <Header />
      <div className="sign-in-box">
        <h3>New to eSports Hub?</h3>
        <p>You can create an account in just a few quick steps.</p>
        <div>
        </div>
        <div className="sign-in-prompt">
          <p>Already have an account?</p>
          <Link to="/signin" style={{ textDecoration: 'none' }} >
            <p>Click here to sign in.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;