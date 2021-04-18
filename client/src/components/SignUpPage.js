import '../styles/App.css';
import '../styles/SignIn.css';
import { useState } from 'react';
import Header from './Header.js';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import * as account from '../requests/Account.js';
import * as data from '../config/default';
const OAuthClientID = data['OAuthClientID'];

function SignUpPage(props) {
  const [displayError, setDisplayError] = useState(false);

  const handleSuccess = async (googleData) => {
    console.log('Attempting authentication...');

    let auth_res = await account.authenticate(googleData, props.updateLogin, setDisplayError, props.isSignedIn);
    
    if (auth_res['status'] == 200){
      console.log('Inserting data', auth_res['data']['payload']);
      await account.createAccount(googleData.googleId, auth_res['data']['payload']['email']);
    }

      // .then((res) => {
      //   console.log('Inserting data', res);
      //   account.createAccount(googleData.googleId, res['email']);
      //   }
      // )
      // .catch((error) => {
      //   console.log('Error using ticket from authentication' , error);
      //   }
      // );
  }

  const handleFailure = () => {
    console.log('Error occurred when logging in');
  }

  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} />
      <div className="sign-in-box">
        <h3>New to eSports Hub?</h3>
        <p>You can create an account in just a few quick steps.</p>
        <div>
          {!props.isSignedIn &&
            <GoogleLogin
              clientId={OAuthClientID}
              buttonText="Login with Google"
              onSuccess={handleSuccess}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            />
          }
          {displayError &&
            <p className="error-msg">
              Sorry, an error occurred when attempting to login with Google.
              Please try again.
            </p>
          }
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;