import React from 'react';
import Button from '../components/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';

/**
 * Props: isLogin, studentIdValue, passwordValue, sessionInputValidation, handleStudentIdChange, handlePasswordChange, handleLogin, handleRegister
 */

class Session extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    // this.props.sessionInputValidation();
    if (this.props.isLogin === 'true') {
      this.props.handleLogin();
    } else {
      this.props.handleRegister();
    }
  }
  
  render() {
    return (
      <div id="Session" className="Container">
        <div id="Session-switcher">
          <Link to="/login">
            <Button id="Session-login" theme="TransparentTheme" text="Login" />
          </Link>
          <Link to="/register">
            <Button id="Session-register" theme="TransparentTheme" text="Register" />
          </Link>
        </div>
        <div id="Session-body">
          <form id="Session-form" onSubmit={this.handleSubmit}>
            <TextInput
              id="Session-studentId"
              type="Text"
              value={this.props.studentIdValue}
              placeholder="Student Id"
              onChange={this.props.handleStudentIdChange}
              isRequired="true"
            />
            <TextInput
              id="Session-password"
              type="Password"
              value={this.props.passwordValue}
              onChange={this.props.handlePasswordChange}
              placeholder="Password"
              isRequired="true"
            />
            <Button id="Session-submit" theme="BlueTheme" text={this.props.isLogin === 'true' ? 'Login' : 'Register'} onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default Session;
