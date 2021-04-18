import '../styles/App.css';
import '../styles/SignIn.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header.js';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import * as account from '../requests/Account.js';
// import * as data from '../config/default';
// const OAuthClientID = data['OAuthClientID'];
const OAuthClientID = '66986949536-80qb9i0l1kugi9lf9476eafih3hr3mpp.apps.googleusercontent.com';
function SignUpPage(props) {
  const [displayError, setDisplayError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSuccess = async (googleData) => {
    console.log('Attempting authentication...');

    await account.authenticate(googleData, props.updateLogin, setDisplayError)
      .then(async (auth_res) => {
        console.log(auth_res);
        console.log('Inserting data', auth_res['data']['payload']);
        await account.createAccount(setRedirect, googleData.googleId, auth_res['data']['payload']['email']);
      });
  }

  const handleFailure = () => {
    console.log('Error occurred when logging in');
  }

  return (
    <div className="App">
      {redirect && <Redirect to="/setup" />}
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
              // isSignedIn={true}
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