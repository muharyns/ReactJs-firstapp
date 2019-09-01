import React, { Component } from 'react';
import { throwStatement } from '@babel/types';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isError: false,
            error_message: '',
            placeholder: 'placeholder',
        }
        this.handleInput = this.handleInput.bind(this);
    };

    componentDidMount() {
        if (this.props.value) {
            this.setState({ value: this.props.value })
        }
        if (this.props.placeholder) {
            this.setState({ placeholder: this.props.placeholder })
        }
        
    }

    handleInput(e) {
        this.setState({
            value: e.target.value,
           
        });
        let error =false;
       
        if(!e.target.value){
            error=true;
        }   
        this.setState({
            isError: error,
            error_message: 'cannot be empty'
        })
    }

  

    render() {
        const { isError, value, error_message, placeholder } = this.state;
        
        return (
            <div>
                <input type="text" placeholder="this is placeholder" value={this.state.value} onChange={this.handleInput}/>
                { isError && 
                    <div class="alert alert-danger" role="alert">
                        {error_message} 
                  </div>
                }
               
            </div>
        );
    };
}

export default InputField;