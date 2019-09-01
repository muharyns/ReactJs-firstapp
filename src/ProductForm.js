import React from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};


class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        id: '',
        name: '',
        category: '',
        price: '',
        stocked: '',
        isError: false,
        placeholder: 'placeholder',
        product: Object.assign({}, RESET_VALUES),
        errors: {
          name: '',
          category: '',
          price: '',
        }
    }
    //this.handleInput = this.handleInput.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    console.log('data',this.props.data)
    if (this.props.value) {
        this.setState({ value: this.props.value })
    }
    if (this.props.placeholder) {
        this.setState({ placeholder: this.props.placeholder })
    }
    
    
    
  }
//   componentWillUpdate(nextProps, nextState) {
//     console.log('Component WILL UPDATE!', nextProps);
//  }

//  componentDidUpdate(prevProps, prevState) {
//   //console.log('Component DID UPDATE!',prevProps)
//   if (this.props.id !== prevProps.id) {
//     this.fetchData(this.props.id);
//     console.log(this.props.id);
//   }
// }


// handleSubmit(event) {
//   if(this.state.isError  ===true || !this.state ){
//     alert('Please fill form ');return false;  
//   }
//   alert('A name was submitted: ' + this.state.value);
//   event.preventDefault();
// }

handleSave(e) {
  
  //console.log(this.state.isError );return false;
  // this.props.onSave(this.state.product);
  // prevent the form submit event from triggering an HTTP Post:
  e.preventDefault();
  

  const { id, name, category, price, stocked } = this.state
  
  
 
  if(!this.handleValidation()){
    alert('Please fill the form');return false;
  }
  //console.log('ini'this.state.name);

  this.props.onSave({ id, name, category, price, stocked })
  // reset the form values to blank after submitting:
  this.setState({
    product: Object.assign({}, RESET_VALUES)
  });
  
  
}


handleValidation() {
  const {  name, category, price } = this.state;
  
  let errors = this.state.errors;
  let formIsValid = true;

  
  if (!name) {
    errors.name = 'Name is required';
    formIsValid = false;
  } 
  if (!category) {
    errors.category = 'Category is required';
    formIsValid = false;
  } 
  if (!price) {
    errors.price = 'Price is required';
    formIsValid = false;
  } 
  this.setState({errors});
  return formIsValid;
}

handleChange(e) {

  const {name, value} = e.target;
  //this.setState({[name]: value});
  
  let errors = this.state.errors;
  let isError = this.state.isError;

  switch (name) {
    case 'name': 
      errors.name = 
        value.length <= 0
          ? 'Name is required'
          : '';
         isError =true
      break;
    case 'category': 
      errors.category = 
        value.length <= 0
          ? 'Category is required'
          : '';
          isError =true
      break;
    case 'price': 
      errors.price = 
        value.length <= 0
          ? 'Price is required'
          : '';
          isError =true
      break;
    default:
    break;
  }

  this.setState({isError, errors, [name]: value});
  console.log(isError);
 // return isError;

  // let error =false;
       
  // if(!e.target.value){
  //     error=true;
  // }   
  // error_message['name'] = 'name is required';
  // this.setState({
  //     isError: error,
  // //    error_message: e.target.name + ' is required'
      

  // })
  // console.log(this.state.error_message)

  // const target = e.target;
  // const value = target.type === 'checkbox' ? target.checked : target.value;
  // const name = target.name;

  //  this.setState((prevState) => {
  //   prevState.product[name] = value;
  //   return { product: prevState.product };
    
  // });
  
}

componentWillReceiveProps (props) {
 //this.calcThinking(props.data.category);
  console.log("props berubah",props.data);
  // this.setState({
  //   name : this.props.data.category
  // })
  const { id, name, category, price, stocked } = props.data
  this.setState({ id, name, category, price, stocked })
}

  render() {
    //const { isError, value, error_message, placeholder } = this.state;
   // const errors = validate(this.state.name, this.state.category);
    //console.log('hasil', this.props)
    const {errors} = this.state;
    //console.log(errors)
    return (
      
         <form>
           
        <h3>Enter a new product</h3>
      
        <p>
          <label>
            Name
            <br />
            
            <input type="text" placeholder="this is placeholder" name="name" value={this.state.name} onChange={this.handleChange}/>
            {errors.name.length > 0 &&<span className='error'>{errors.name}</span>}
             </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange}/>
            {errors.category.length > 0 &&<span className='error'>{errors.category}</span>}
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
            {errors.price.length > 0 &&<span className='error'>{errors.price}</span>}
          </label>
        </p>
        
        <p>
          <label>
          <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked}/>
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave} />
      </form>
    );
  }
}

export default ProductForm;