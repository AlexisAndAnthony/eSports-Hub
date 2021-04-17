import '../styles/App.css';
import '../styles/SignIn.css';
import Header from './Header.js';

function SignInPage() {
  return (
    <div className="App">
      <Header />
      <div className="sign-in-box">
        <h3>Welcome back!</h3>
        <p>Sign in to eSports Hub below.</p>
        <div className="forgot-prompt">
          <p>Forgot your email?</p>
          <p>Forgot your password?</p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;