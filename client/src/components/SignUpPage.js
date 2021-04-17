import '../styles/App.css';
import '../styles/SignIn.css';
import Header from './Header.js';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import * as data from '../config/default';
const OAuthClientID = data['OAuthClientID'];

function SignUpPage(props) {
  const handleSuccess = async googleData => {
    axios({
      method: 'post',
      url: '/api/users/auth',
      data: {
        token: googleData.tokenId
      }
    }) 
    .then((response) => {
      // store returned user
      props.updateLogin(true);
      console.log(response);
    }, (error) => {
      console.log(error);
    });
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
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;