import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import NavigationBar from './containers/NavigationBar';
import Session from './containers/Session';
import Popup from './containers/Popup';
import Products from './containers/Products';
import AddProduct from './containers/AddProduct';
import Balance from './containers/Balance';

import sessionHandler from './handlers/session';

class AppNoNavigate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: null,
      studentIdInputValue: '',
      passwordInputValue: '',
      popupMessage: '',
    };
    
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleStudentIdChange = this.handleStudentIdChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
  }
  
  componentDidMount() {
    sessionHandler.getSessionInfo(this, this.handleWarning);
  }
  
  handleLogin() {
    sessionHandler.login(
      this,
      this.props.navigate,
      this.handleWarning,
      this.state.studentIdInputValue,
      this.state.passwordInputValue,
    );
  }
  
  handleRegister() {
    sessionHandler.register(
      this,
      this.props.navigate,
      this.handleWarning,
      this.state.studentIdInputValue,
      this.state.passwordInputValue,
    );
  }
  
  handleLogout() {
    sessionHandler.logout(
      this,
      this.props.navigate,
      this.handleWarning,
    );
  }
  
  handleStudentIdChange(event) {
    this.setState({ studentIdInputValue: event.target.value });
  }
  
  handlePasswordChange(event) {
    this.setState({ passwordInputValue: event.target.value });
  }
  
  handleWarning(message) {
    this.setState({ popupMessage: message });
  }
  
  handleClosePopup() {
    this.setState({ popupMessage: '' });
  }
  
  render() {
    return (
        <div className="App">
          <header>
            <NavigationBar
              studentId={this.state.studentId}
              handleLogout={this.handleLogout}
            />
          </header>
          <main>
            <Routes>
              <Route path="/login" element={
                <Session
                  isLogin="true"
                  studentIdValue={this.state.studentIdInputValue}
                  passwordValue={this.state.passwordInputValue}
                  handleStudentIdChange={this.handleStudentIdChange}
                  handlePasswordChange={this.handlePasswordChange}
                  handleLogin={this.handleLogin}
                  handleRegister={this.handleRegister}
                />
              } />
              <Route path="/register" element={
                <Session
                  isLogin="false"
                  studentIdValue={this.state.studentIdInputValue}
                  passwordValue={this.state.passwordInputValue}
                  handleStudentIdChange={this.handleStudentIdChange}
                  handlePasswordChange={this.handlePasswordChange}
                  handleLogin={this.handleLogin}
                  handleRegister={this.handleRegister}
                />
              } />
              <Route path="/" element={
                <Products
                  studentId={this.state.studentId}
                  navigate={this.props.navigate}
                  warningHandler={this.handleWarning}
                />
              } />
              <Route path="/add-product" element={
                <AddProduct
                  studentId={this.state.studentId}
                  navigate={this.props.navigate}
                  warningHandler={this.handleWarning}
                />
              } />
              <Route path="/balance" element={
                <Balance
                  studentId={this.state.studentId}
                  navigate={this.props.navigate}
                  warningHandler={this.handleWarning}
                />
              } />
            </Routes>
          </main>
          <Popup message={this.state.popupMessage} handleClose={this.handleClosePopup} />
        </div>
    );
  }
}

function App(props) {
  const navigate = useNavigate();
  return (
    <AppNoNavigate {...props} navigate={navigate} />
  );
}

export default App;
