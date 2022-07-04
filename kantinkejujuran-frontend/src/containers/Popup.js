import React from 'react';
import Button from '../components/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * Props: message, handleClose
 */

class Popup extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.message !== '') {
      return (
        <div id="Popup">
          <div id="Popup-container" className="Container">
            <div id="Popup-header">
              <h2>Failed</h2>
              <Button id="Popup-close" theme="TransparentTheme" text="X" onClick={this.props.handleClose} />
            </div>
            <div id="Popup-body">
                <p>{this.props.message}</p>
            </div>
          </div>
          <div id="DimScreen"></div>
        </div>
      );
    }
    
    return;
  }
}

export default Popup;
