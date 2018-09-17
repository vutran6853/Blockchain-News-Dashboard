import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form, Icon, Input, Checkbox } from 'antd';
import Axios from 'axios';


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
    //  let fullInfo = {firstName, lastName, email, password}
    // console.log(fullInfo)
    Axios.post(`/api/user`, { firstName, lastName, email, password })

  };

  

  render() {
    console.log(this.state)

    let FormItem = Form.Item

    return(
      <div>

       



        <label sm={2}><strong>Register Page </strong></label>

        <Form className='formBox'>
          <label sm={2}><strong>First Name:</strong></label>
          <FormItem>  
            <Input type='text' 
                    placeholder='Enter First Name:'
                    value={ this.state.firstName }
                    onChange={ (e) => this.setState({ firstName: e.target.value  }) }
                    required={true}
            ></Input>
          </FormItem>

          <label sm={2}><strong>Last Name:</strong></label>
          <FormItem>  
            <Input type='text' 
                    placeholder='Enter Last Name:'
                    value={ this.state.lastName }
                    onChange={ (e) => this.setState({ lastName: e.target.value  }) }
                    required={true}
            ></Input>
          </FormItem>

          <label sm={2}><strong>Email:</strong></label>
          <FormItem>  
            <Input type='email' 
                    placeholder='Enter Email:'
                    value={ this.state.email }
                    onChange={ (e) => this.setState({ email: e.target.value  }) }
                    required={true}
            ></Input>
          </FormItem>

          <label sm={2}><strong>Password:</strong></label>
          <FormItem>  
            <Input type='password' 
                    placeholder='Enter password:'
                    value={ this.state.password }
                    onChange={ (e) => this.setState({ password: e.target.value  }) }
                    required={true}
            ></Input>
          </FormItem>



          <FormItem>
            <Link to='/'>
              <Button color='success' >Cancel</Button>
            </Link>

           <Link to='/'>
              <Button color='success'
                      onClick={ () => this.handleSumit() }
              >Register</Button>
            </Link>
          </FormItem>
        </Form>


        
      </div>
    )
  }


}

export default SignUp;