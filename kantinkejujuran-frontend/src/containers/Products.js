import React from 'react';
import ProductInfo from './ProductInfo';
import ProductList from './ProductList';
import Button from '../components/Button';

import productHandler from '../handlers/products';

/**
 * Props: studentId, handleBuy, handleAdd
 */

class Product extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: [],
      sortData: 'created',
      sortDirection: 'ascending',
      selectedProduct: null,
    };
    
    this.updateProducts = this.updateProducts.bind(this);
    this.switchSortData = this.switchSortData.bind(this);
    this.switchSortDirection = this.switchSortDirection.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.handleAddNavigate = this.handleAddNavigate.bind(this);
  }
  
  componentDidMount() {
    this.updateProducts();
  }
  
  updateProducts() {
    productHandler.getProducts(
      this,
      this.props.navigate,
      this.props.warningHandler,
      this.state.sortData,
      this.state.sortDirection,
    );
  }
  
  switchSortData(data) {
    this.setState({ sortData: data }, () => {
      this.updateProducts();
    });
  }
  
  switchSortDirection(direction) {
    this.setState({ sortDirection: direction }, () => {
      this.updateProducts();
    });
  }
  
  handleBoxClick(productData) {
    productHandler.getProduct(
      this,
      this.props.navigate,
      this.props.warningHandler,
      productData.id,
    );
  }
  
  handleBuy() {
    if (this.state.selectedProduct != null) {
      productHandler.buyProduct(
        this,
        this.props.navigate,
        this.props.warningHandler,
        this.state.selectedProduct.id,
      );
    }
  }
  
  handleAddNavigate() {
    this.props.navigate('/add-product');
  }
  
  render() {
    return (
      <div id="Products">
        <ProductInfo
          studentId={this.props.studentId}
          navigate={this.props.navigate}
          warningHandler={this.props.warningHandler}
          selectedProduct={this.state.selectedProduct}
          onBuy={this.handleBuy}
        />
        <ProductList
          navigate={this.props.navigate}
          warningHandler={this.props.warningHandler}
          products={this.state.products}
          sortData={this.state.sortData}
          sortDirection={this.state.sortDirection}
          switchSortData={this.switchSortData}
          switchSortDirection={this.switchSortDirection}
          onProductBoxClick={this.handleBoxClick}
        />
        {this.props.studentId != null &&
          <Button
            id="Products-add"
            theme="BlueTheme"
            text="+"
            onClick={this.handleAddNavigate}
          />
        }
      </div>
    );
  }
}

export default Product;
