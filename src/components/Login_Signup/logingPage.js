import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
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
    let { email, password } = this.state
    axios.post(`/api/user/login`, { email, password })
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
    console.log(this.state)

    let FormItem = Form.Item
    return(

      <div>



        

        <label sm={2}><strong>Login Page </strong></label>

        <Form className='formBox'>
          <label sm={2}><strong>Email:</strong></label>
          <FormItem>  
            <Input type='text' 
                    placeholder='Email..:'
                    value={ this.state.email }
                    onChange={ (e) => this.handleEmail(e.target.value) }
                    required={true}
            ></Input>
          </FormItem>

          <label sm={2}><strong>Password:</strong></label>
          <FormItem>  
            <Input type='password' 
                    placeholder='Enter Last Name:'
                    value={ this.state.password }
                    onChange={ (e) => this.handlePassword(e.target.value) }
                    required={true}
            ></Input>
          </FormItem>

          <FormItem>
            <Link to='/SignUp'>
                <Button type='danger' className='ant-btn-primary' >Sign up</Button>
            </Link>

            <Link to='/'>
              <Button type='danger' 
                      className='ant-btn-primary' 
                      onClick={ () => this.handleChangeSumit() }
              >Submit</Button>
            </Link>
          </FormItem>
        </Form>

        

      </div>
    )

  }


}


export default LoginSignUp;

