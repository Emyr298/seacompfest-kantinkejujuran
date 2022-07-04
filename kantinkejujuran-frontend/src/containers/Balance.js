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

import balanceHandler from '../handlers/balance';

/**
 * Props: studentId, navigate, warningHandler
 */

class Session extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      balance: -1,
      amount: '',
    };
    
    // Binding
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }
  
  componentDidMount() {
    balanceHandler.getBalance(
      this,
      this.props.navigate,
      this.props.warningHandler,
    );
  }
  
  handleAdd() {
    balanceHandler.addBalance(
      this,
      this.props.navigate,
      this.props.warningHandler,
      this.state.amount,
    );
  }
  
  handleWithdraw() {
    balanceHandler.withdrawBalance(
      this,
      this.props.navigate,
      this.props.warningHandler,
      this.state.amount,
    );
  }
  
  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  
  render() {
    if (this.props.studentId != null) {
      return (
        <div id="Balance" className="Container">
          <h4>Canteen's Balance</h4>
          {this.state.balance >= 0
            ? <h1>Rp{this.state.balance}</h1>
            : <h1 style={{color: 'transparent'}}>Rp{this.state.balance}</h1>
          }
          
          <TextInput
            id="Balance-amount"
            type="Number"
            value={this.state.amount}
            placeholder="Amount (Rp)"
            onChange={this.handleAmountChange}
          />
          <div id="Balance-buttons">
            <Button id="Balance-add" theme="BlueTheme" text="Add" onClick={this.handleAdd} />
            <Button id="Balance-withdraw" theme="BlueTheme" text="Withdraw" onClick={this.handleWithdraw} />
          </div>
        </div>
      );
    } else {
      return (
        <h1>Login to add/withdraw balance</h1>
      );
    }
  }
}

export default Session;
