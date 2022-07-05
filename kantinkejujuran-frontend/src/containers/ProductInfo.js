import React from 'react';
import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';
import ProductImage from '../components/ProductImage';

/**
 * Props: studentId, selectedProduct, onBuy
 */

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(this.props.selectedProduct);
    if (this.props.selectedProduct != null) {
      return (
        <div id="ProductInfo" className="Container">
          <ProductImage src={`data:${this.props.selectedProduct.image.contentType};base64,${this.props.selectedProduct.image.data}`} />
          <h4>{this.props.selectedProduct.name}</h4>
          <h3>Rp{this.props.selectedProduct.price}</h3>
          <p id="ProductInfo-desc">
            {this.props.selectedProduct.desc}<br/>
            <br/>
            Date Created: {(new Date(this.props.selectedProduct.created)).toLocaleString()}
          </p>
          {this.props.studentId != null
            ?
            <Button id="ProductInfo-buy" theme="BlueTheme" text="Buy" onClick={this.props.onBuy} />
            :
            <ToggleButton id="ProductInfo-loginToBuy" theme="TransparentTheme" isOn={true} text="Login to Buy" />
          }
        </div>
      );
    }
  }
}

export default ProductInfo;
