import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInWithFacebook: false,
      message: ""
    };
  }

  changeState(response) {
    if (response.status === "connected") {
      console.log("You are signed into Facebook");
      this.setState({
        loggedInWithFacebook: true,
        message: "Signed in to Facebook!"
      });
    } else if (
      response.status === "unknown" ||
      response.status === "not_authorized"
    ) {
      console.log("Signed out of Facebook!");
      this.setState({
        loggedInWithFacebook: false,
        message: "Successfully logged out!"
      });
    }
  }

  facebookLogin() {
    FB.getLoginStatus(response => {
      if (response.status !== "connected") {
        FB.login(() => {
          FB.getLoginStatus(response => {
            this.changeState(response);
          });
        });
      } else {
        console.log("Already signed in!");
      }
    });
  }

  facebookLogout() {
    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        FB.logout(() => {
          FB.getLoginStatus(response => {
            this.changeState(response);
          });
        });
      } else {
        console.log("Already signed out!");
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Brandon's Facebook Login Page</h1>
        <button onClick={this.facebookLogin.bind(this)}>
          Login with Facebook
        </button>
        <button onClick={this.facebookLogout.bind(this)}>
          Logout of Facebook
        </button>
      </div>
    );
  }
}
export default App;
