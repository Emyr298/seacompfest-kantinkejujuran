import React from 'react';
import Button from '../components/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * Props: studentId, handleLogout, handleWarningMessage
 */

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const isLoggedIn = (this.props.studentId != null);
    return (
      <nav id="NavigationBar">
        <div id="NavigationBar-logo">
          <Link to="/">
            <h1>Kantin Kejujuran</h1>
          </Link>
        </div>
        
        <div id="NavigationBar-body">
          <div id="NavigationBar-links">
            <Link to="/">
              <Button id="NavigationBar-products" theme="TransparentTheme" text="Products" />
            </Link>
            {isLoggedIn &&
              <Link to="/balance">
                <Button id="NavigationBar-balance" theme="TransparentTheme" text="Balance" />
              </Link>
            }
          </div>
          
          {!isLoggedIn
            ?
            <div id="NavigationBar-session">
              <Link to="/login">
                <Button id="NavigationBar-login" theme="TransparentTheme" text="Login" />
              </Link>
              <Link to="/register">
                <Button id="NavigationBar-register" theme="BlueTheme" text="Register" />
              </Link>
            </div>
            :
            <div id="NavigationBar-session">
              <p>Welcome, {this.props.studentId}</p>
              <Button id="NavigationBar-logout" theme="TransparentTheme" text="Logout" onClick={this.props.handleLogout} />
            </div>
          }
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
