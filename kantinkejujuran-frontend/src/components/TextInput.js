import React from 'react';

/**
 * Props: id, type, value, placeholder, onChange, isRequired
 */

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `TextInput`;
  }
  
  render() {
    if (this.props.isRequired === 'true') {
      return (
        <input
          id={this.props.id}
          className={this.classes}
          type={this.props.type === 'Password' ? 'password' : 'text'}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          required
        />
      );
    } else {
      return (
        <input
          id={this.props.id}
          className={this.classes}
          type={this.props.type === 'Password' ? 'password' : 'text'}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      );
    }
  }
}

export default TextInput;
