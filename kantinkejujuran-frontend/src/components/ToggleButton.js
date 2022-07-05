import React from 'react';

/**
 * Props: id, theme, isOn, text, onOn, onOff
 * 
 * Themes:
 * - TransparentTheme
 */

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    
    if (!this.props.onOn) {
      this.handleOn = () => {};
    } else {
      this.handleOn = this.props.onOn;
    }
    
    if (!this.props.onOff) {
      this.handleOff = () => {};
    } else {
      this.handleOff = this.props.onOff;
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    if (this.props.isOn) {
      this.handleOff();
    } else {
      this.handleOn();
    }
  }
  
  render() {
    const classes = `ToggleButton ${this.props.theme} ${this.props.isOn ? 'On' : 'Off'}`;
    
    return (
      <div id={this.props.id} className={classes} onClick={this.handleClick}>
        <p className="ToggleButton-text">{this.props.text}</p>
      </div>
    );
  }
}

export default ToggleButton;
