import React from 'react';

/**
 * Props: id, name, theme, text, filename, onChange
 * 
 * Themes
 * - BlueTheme
 */

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `FileInput`;
    this.labelClasses = `FileInput-label ${this.props.theme}`;
    this.inputClasses = `FileInput-input`
  }
  
  render() {
    return (
      <div id={this.props.id} className={this.classes}>
        <label
          id={this.props.id + '-label'}
          className={this.labelClasses}
          htmlFor={this.props.id + '-input'}
        >
          {this.props.text}
        </label>
        <p>{this.props.filename}</p>
        <input
          id={this.props.id + '-input'}
          className={this.inputClasses}
          type="file"
          name={this.props.name}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default FileInput;
