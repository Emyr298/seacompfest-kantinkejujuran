import React from 'react';

/**
 * Props: src, alt, fit
 */

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <img className={`ProductImage ${this.props.fit}`} src={this.props.src} alt={this.props.alt} />
    );
  }
}

export default ProductInfo;
