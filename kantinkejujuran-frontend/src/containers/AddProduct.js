import React from 'react';
import Button from '../components/Button';
import FileInput from '../components/FileInput';
import TextArea from '../components/TextArea';
import TextInput from '../components/TextInput';

import productsHandler from '../handlers/products';

/**
 * Props: studentId, navigate, warningHandler
 */

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      productNameValue: '',
      productPriceValue: '',
      file: null,
      productDescValue: '',
    };
    
    this.getFilename = this.getFilename.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
    this.handleProductImageChange = this.handleProductImageChange.bind(this);
    this.handleProductDescChange = this.handleProductDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  getFilename() {
    if (this.state.file) {
      return this.state.file.name.slice(0, 20) + '...';
    } else {
      return 'Empty'
    }
  }
  
  handleProductNameChange(event) {
    this.setState({ productNameValue: event.target.value });
  }
  
  handleProductPriceChange(event) {
    this.setState({ productPriceValue: event.target.value });
  }
  
  handleProductImageChange(event) {
    const fileArray = Array.from(event.target.files);
    const file = fileArray[0];
    this.setState({ file: file });
    console.log(file);
  }
  
  handleProductDescChange(event) {
    this.setState({ productDescValue: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    productsHandler.addProduct(
      this,
      this.props.navigate,
      this.props.warningHandler,
      this.state.productNameValue,
      this.state.productPriceValue,
      this.state.file,
      this.state.productDescValue,
    );
  }
  
  render() {
    if (this.props.studentId != null) {
      return (
        <div id="AddProduct" className="Container">
          <h4>Add Product</h4>
          <form id="AddProduct-form">
            <TextInput
              id="AddProduct-productName"
              type="Text"
              value={this.state.productNameValue}
              placeholder="Product Name"
              onChange={this.handleProductNameChange}
            />
            <TextInput
              id="AddProduct-productPrice"
              type="Number"
              value={this.state.productPriceValue}
              placeholder="Product Price (Rp)"
              onChange={this.handleProductPriceChange}
            />
            <FileInput
              id="AddProduct-productImage"
              name="ProductImage"
              theme="BlueTheme"
              text="Upload Product Image"
              filename={this.getFilename()}
              onChange={this.handleProductImageChange}
            />
            <TextArea
              id="AddProduct-productDesc"
              type="Number"
              value={this.state.productDescValue}
              placeholder="Product Description"
              onChange={this.handleProductDescChange}
            />
            <Button id="AddProduct-submit" theme="BlueTheme" text="Add Product" onClick={this.handleSubmit} />
          </form>
        </div>
      );
    } else {
      return (
        <h1>Login to Add Product</h1>
      );
    }
  }
}

export default AddProduct;
