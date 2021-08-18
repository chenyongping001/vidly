import React, { Component } from "react";
class LogoutForm extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default LogoutForm;
