import React from 'react';

// Props: id, name, theme, text, isRequired

/**
 * Themes
 * - BlueTheme
 */

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `FileInput`;
    this.labelClasses = `FileInput-label ${this.props.theme}`;
    this.inputClasses = `FileInput-input`
    
    this.state = {
      filename: 'Empty',
    };
  }
  
  render() {
    if (isRequired) {
      return (
        <div id={this.props.id} className={this.classes}>
          <label
            id={this.props.id + '-label'}
            className={this.labelClasses}
            for={this.props.id + '-input'}
          >
            {this.props.text}
          </label>
          <p>{this.state.filename}</p>
          <input
            id={this.props.id + '-input'}
            class={this.inputClasses}
            type="file"
            name={this.props.name}
            required
          />
        </div>
      );
    } else {
      return (
        <div id={this.props.id} className={this.classes}>
          <label
            id={this.props.id + '-label'}
            className={this.labelClasses}
            for={this.props.id + '-input'}
          >
            {this.props.text}
          </label>
          <p>{this.state.filename}</p>
          <input
            id={this.props.id + '-input'}
            class={this.inputClasses}
            type="file"
            name={this.props.name}
            required
          />
        </div>
      );
    }
  }
}

export default FileInput;
