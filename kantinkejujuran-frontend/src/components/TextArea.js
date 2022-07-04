import React from 'react';

/**
 * Props: id, text, value, placeholder, onChange, isRequired
 */

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `TextArea`;
  }
  
  render() {
    if (this.props.isRequired) {
      return (
        <textarea
          id={this.props.id}
          className={this.classes}
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          required
        />
      );
    } else {
      return (
        <textarea
          id={this.props.id}
          className={this.classes}
          type="text"
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      );
    }
  }
}

export default TextArea;
