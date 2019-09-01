import React from 'react';
import Filters from './Filters.js';
import ProductTable from './ProductTable.js';
import ProductForm from './ProductForm';

var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
};
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: PRODUCTS,
     
      dataPenampungan: ''
    };
    
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleFilter(filterInput) {
    this.setState(filterInput);
   
  }
  saveProduct(product) {
    console.log('product', product);
    if (!product.id) {
      product.id = new Date().getTime();
    } 
    this.setState((prevState) => {
      let products = prevState.products;
      products[product.id] = product;
     
      return { products };
    });
  //  this.setState({ dataPenampungan: product })
    //console.log('ini ubah',product);
  }
  handleDestroy(productId) {
    console.log('destroyed',productId);
    this.setState((prevState) => {
      let products = prevState.products;
      delete products[productId];
      return { products };
    });
  }
  handleEdit(productId) {
    console.log('Edit',productId);
    
    this.setState((prevState) => ({
      dataPenampungan: prevState.products[productId]
      

    }))

    
    //  // return{ products}
    // })
    // this.setState({
    //   doing : productId
    // })
    // var activities = ["isCoding", "isEating", "isSleeping"];
    // var randAct = rand(activities);
   
    
  }
 
  handleButtonClick() {
    var activities = ["isCoding", "isEating", "isSleeping"];
    var randAct = rand(activities);
    this.setState({
      doing: randAct
    });
  }
  
  
  render() {
    return (
      <div>
        <Filters
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilter={this.handleFilter}
        ></Filters>
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onDestroy={this.handleDestroy}
          onEdit={this.handleEdit} 
        ></ProductTable>
        {/* <ProductForm data={this.state.dataPenampungan} activity={this.state.doing}></ProductForm> */}
        <ProductForm data={this.state.dataPenampungan} onSave={this.saveProduct}></ProductForm> 
        
      </div>
    );
  }
}

export default Products;