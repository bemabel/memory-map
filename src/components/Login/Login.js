import React, { Component } from 'react';
import './Login.scss';

import FacebookLogin from 'react-facebook-login';

// import GoogleLogin from 'react-google-login';

class Login extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    // const responseGoogle = (response) => {
    //   console.log(response);
    // }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="1125863574263945" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />


        {/* <GoogleLogin
        clientId="889994872599-6eq3q0bfha05dtj25l1ffa929q3aq2qe.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      /> */}

      </div>
    );
  }
}

export default Login;