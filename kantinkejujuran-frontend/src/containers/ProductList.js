import React from 'react';
import ToggleButton from '../components/ToggleButton';
import ProductBox from '../containers/ProductBox';

import productsHandler from '../handlers/products';

/**
 * Props: navigate, warningHandler, onProductBoxClick
 */

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: [],
      sortData: 'created',
      sortDirection: 'ascending',
    };
    
    this.switchSortData = this.switchSortData.bind(this);
    this.switchSortDirection = this.switchSortDirection.bind(this);
  }
  
  componentDidMount() {
    productsHandler.getProducts(
      this,
      this.props.navigate,
      this.props.warningHandler,
      this.state.sortData,
      this.state.sortDirection,
    );
  }
  
  switchSortData(data) {
    this.setState({ sortData: data }, () => {
      productsHandler.getProducts(
        this,
        this.props.navigate,
        this.props.warningHandler,
        this.state.sortData,
        this.state.sortDirection,
      );
    });
  }
  
  switchSortDirection(direction) {
    this.setState({ sortDirection: direction }, () => {
      productsHandler.getProducts(
        this,
        this.props.navigate,
        this.props.warningHandler,
        this.state.sortData,
        this.state.sortDirection,
      );
    });
  }
  
  render() {
    const productBoxes = [];
    for (let i = 0; i < this.state.products.length; i++) {
      productBoxes.push(
        <ProductBox
          key={this.state.products[i].id}
          productData={this.state.products[i]}
          onClick={this.props.onProductBoxClick}
        />
      );
    }
    
    return (
      <div id="ProductList">
        <div id="ProductList-sort" className="Container">
          <label>Sort By:</label>
          <div id="ProductList-sortData">
            <ToggleButton
              id="ProductList-sortDate"
              theme="TransparentTheme"
              isOn={this.state.sortData === 'created'}
              text="Date Created"
              onOn={() => { this.switchSortData('created') }}
            />
            <ToggleButton
              id="ProductList-sortName"
              theme="TransparentTheme"
              isOn={this.state.sortData === 'name'}
              text="Name"
              onOn={() => { this.switchSortData('name') }}
            />
          </div>
          <div id="ProductList-sortDirection">
            <ToggleButton
              id="ProductList-sortAsc"
              theme="TransparentTheme"
              isOn={this.state.sortDirection === 'ascending'}
              text="↑"
              onOn={() => { this.switchSortDirection('ascending') }}
            />
            <ToggleButton
              id="ProductList-sortDesc"
              theme="TransparentTheme"
              isOn={this.state.sortDirection === 'descending'}
              text="↓"
              onOn={() => { this.switchSortDirection('descending') }}
            />
          </div>
        </div>
        <div id="ProductList-body">
          { productBoxes }
        </div>
      </div>
    );
  }
}

export default ProductList;
