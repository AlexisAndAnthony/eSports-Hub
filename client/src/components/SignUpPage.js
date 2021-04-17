import '../styles/App.css';
import '../styles/SignIn.css';
import Header from './Header.js';
import { GoogleLogin } from 'react-google-login';
import * as data from '../config/default';
const OAuthClientID = data['OAuthClientID'];

function SignUpPage(props) {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} />
      <div className="sign-in-box">
        <h3>New to eSports Hub?</h3>
        <p>You can create an account in just a few quick steps.</p>
        <div>
          <GoogleLogin
            clientId={OAuthClientID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;