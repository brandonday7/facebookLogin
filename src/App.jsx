import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  facebookLogin() {
    FB.getLoginStatus(response => {
      if (response.status === "connected") {
        console.log("You are signed in! Welcome");
      } else if (response.status === "not_authorized") {
        console.log("You have not signed in to this page yet. Please do so");
        FB.login();
      } else if (response.status === "unknown") {
        console.log("You previously signed out of Facebook.");
      }
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Brandon's Facebook Login Page</h1>
        <button onClick={this.facebookLogin}>Login with Facebook</button>
        <button onClick={this.facebookLogout}>Logout of Facebook</button>
      </div>
    );
  }
}
export default App;
