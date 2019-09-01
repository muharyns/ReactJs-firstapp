import React from 'react';
import { throwStatement } from '@babel/types';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
    this.edit = this.edit.bind(this);
  }
  destroy() {
    this.props.onDestroy(this.props.product.id);
  }
  edit() {
   this.props.onEdit(this.props.product.id);
   
  }

  // shouldComponentUpdate(newProps, newState){
  //   console.log("shouldComponentUpdate() is trigger");
  //   console.log("ss",newProps);
  //   console.log("ss",newState);
  //   return false;
  // }
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
        <td><button onClick={this.destroy}>x</button></td>
        <td><button onClick={this.edit}>Edit</button></td>
      </tr>
 
    );
  }
}

export default ProductRow;