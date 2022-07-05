import React from 'react';

/**
 * Props: src, alt
 */

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <img className="ProductImage" src={this.props.src} alt={this.props.alt} />
    );
  }
}

export default ProductInfo;
