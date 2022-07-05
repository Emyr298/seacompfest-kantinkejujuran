import React from 'react';
import Button from '../components/Button';

import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';
import ToggleButton from '../components/ToggleButton';
import ProductImage from '../components/ProductImage';

/**
 * Props: id, productData, onClick
 */

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id={this.props.id} className="Container" onClick={() => {this.props.onClick(this.props.productData)}}>
        <ProductImage
          src={`data:${this.props.productData.image.contentType};base64,${this.props.productData.image.data}`}
          fit="Cover"
        />
        <h5>{this.props.productData.name}</h5>
        <h4>Rp{this.props.productData.price}</h4>
      </div>
    );
  }
}

export default ProductInfo;
