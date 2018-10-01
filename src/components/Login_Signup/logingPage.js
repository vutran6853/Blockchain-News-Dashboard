import React, { Component } from 'react';
import { Form, FormGroup,  Input, Button } from 'reactstrap';
import css from './login_SignUp.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

class LoginSignUp extends Component {
  constructor(props) {
    super(props) 

      this.state = {
        email: '',
        password: ''

      }
  } 

  handleSumit = (e) => {
    e.preventDefault();
    this.props.form.validation((error, value) => {
      if(!error) {
        console.log(`Fail to submit form: `, value)
      }
    }) 
  }

  handleChangeSumit() {
    let { email } = this.state
    axios.post(`/api/user/login`, { email })
    .then((response) => {
      console.log(response)
    })

  }
  handleEmail(value) {
    this.setState({ email: value })
  }
  handlePassword(value) {
    this.setState({ password: value })
  }

  render() {
    // console.log(this.state)

    // let FormGroup = Form.Item
    return(

      <div>
        <div className='container text-center'>
          <label sm={2} className='text-center'><strong>Login Page </strong></label>
        </div>

        <Form className='formBox container '>
          <label sm={2}><strong>Email:</strong></label>
            <Input type='text' 
                    placeholder='Email..:'
                    value={ this.state.email }
                    onChange={ (e) => this.handleEmail(e.target.value) }
                    required={true}
            ></Input>

          <label sm={2}><strong>Password:</strong></label>
          <FormGroup>  
            <Input type='password' 
                    placeholder='Enter Last Name:'
                    value={ this.state.password }
                    onChange={ (e) => this.handlePassword(e.target.value) }
                    required={true}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Link to='/SignUp'>
                <Button type='danger' className='ant-btn-primary' >Sign up</Button>
            </Link>

            <Link to='/'>
              <Button type='danger' 
                      className='ant-btn-primary m-1' 
                      onClick={ () => this.handleChangeSumit() }
              >Submit</Button>
            </Link>
          </FormGroup>
        </Form>

      </div>
    )
  }
}

export default LoginSignUp;

