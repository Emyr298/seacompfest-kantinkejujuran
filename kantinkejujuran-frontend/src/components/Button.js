import React from 'react';

/**
 * Props: id, theme, text, onClick
 * 
 * Themes:
 * - BlueTheme
 * - RedTheme
 * - TransparentTheme
 */

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `Button ${this.props.theme}`;
    
    if (!this.props.onClick) {
      this.onClick = () => {};
    } else {
      this.onClick = this.props.onClick;
    }
  }
  
  render() {
    return (
      <button id={this.props.id} className={this.classes} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
