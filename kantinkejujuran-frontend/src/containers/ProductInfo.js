import React from 'react';
import Button from '../components/Button';

import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';

/**
 * Props: studentId, productId
 */

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    
  }
  
  handleBuy() {
    
  }
  
  render() {
    return (
      <div id="ProductInfo" className="Container">
        <ProductImage src={''} alt={''} />
        <h4>{this.props.productName}</h4>
        <h3>{this.props.productPrice}</h3>
        <p>{this.props.productDesc}</p>
        {this.props.studentId != null
          ?
          <Button id="ProductInfo-buy" theme="BlueTheme" text="Buy" onClick={this.handleBuy} />
          :
          <h3 id="ProductInfo-loginToBuy">Login to Buy</h3>
        }
      </div>
    );
  }
}

export default ProductInfo;
