import React from 'react';
import ToggleButton from '../components/ToggleButton';
import ProductBox from '../containers/ProductBox';

import productHandler from '../handlers/products';

/**
 * Props: navigate, warningHandler, onProductBoxClick
 */

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const productBoxes = [];
    for (let i = 0; i < this.props.products.length; i++) {
      productBoxes.push(
        <ProductBox
          key={this.props.products[i].id}
          productData={this.props.products[i]}
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
              isOn={this.props.sortData === 'created'}
              text="Date Created"
              onOn={() => { this.props.switchSortData('created') }}
            />
            <ToggleButton
              id="ProductList-sortName"
              theme="TransparentTheme"
              isOn={this.props.sortData === 'name'}
              text="Name"
              onOn={() => { this.props.switchSortData('name') }}
            />
          </div>
          <div id="ProductList-sortDirection">
            <ToggleButton
              id="ProductList-sortAsc"
              theme="TransparentTheme"
              isOn={this.props.sortDirection === 'ascending'}
              text="↑"
              onOn={() => { this.props.switchSortDirection('ascending') }}
            />
            <ToggleButton
              id="ProductList-sortDesc"
              theme="TransparentTheme"
              isOn={this.props.sortDirection === 'descending'}
              text="↓"
              onOn={() => { this.props.switchSortDirection('descending') }}
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
