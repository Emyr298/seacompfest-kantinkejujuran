import React from 'react';

// Props: id, fit, src, alt

/**
 * Fit:
 * - Fill
 * - Cover
 */

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.classes = `Image ${this.props.fit}`;
  }
  
  render() {
    return (
      <img
        id={this.props.id}
        className={this.classes}
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
}

export default Image;
