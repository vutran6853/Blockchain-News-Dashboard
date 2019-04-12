import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';

class SignUp extends Component{
  constructor(props) {
    super(props) 

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleSumit() {
    let { firstName, lastName, email, password } = this.state;

    axios.post(`/api/user`, { firstName, lastName, email, password })
  };
  
  render() {
    return(
      <div>
        <div className='container text-center'>
          <label sm={ 2 }><strong>Register Page </strong></label>
        </div>

        <Form className='formBox container'>
          <label sm={ 2 }><strong>First Name:</strong></label>
          <FormGroup>  
            <Input type='text' 
                    placeholder='Enter First Name:'
                    value={ this.state.firstName }
                    onChange={ (e) => this.setState({ firstName: e.target.value  }) }
                    required={ true }
            ></Input>
          </FormGroup>

          <label sm={ 2 }><strong>Last Name:</strong></label>
          <FormGroup>  
            <Input type='text' 
                    placeholder='Enter Last Name:'
                    value={ this.state.lastName }
                    onChange={ (e) => this.setState({ lastName: e.target.value  }) }
                    required={ true }
            ></Input>
          </FormGroup>

          <label sm={ 2 }><strong>Email:</strong></label>
          <FormGroup>  
            <Input type='email' 
                    placeholder='Enter Email:'
                    value={ this.state.email }
                    onChange={ (e) => this.setState({ email: e.target.value  }) }
                    required={ true }
            ></Input>
          </FormGroup>

          <label sm={ 2 }><strong>Password:</strong></label>
          <FormGroup>  
            <Input type='password' 
                    placeholder='Enter password:'
                    value={ this.state.password }
                    onChange={ (e) => this.setState({ password: e.target.value  }) }
                    required={ true }
            ></Input>
          </FormGroup>

          <FormGroup>
            <Link to='/'>
              <Button color='success' className='m-1' >Cancel</Button>
            </Link>

           <Link to='/'>
              <Button color='success'
                      onClick={ () => this.handleSumit() }
              >Register</Button>
            </Link>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SignUp;