import logo200Image from '../assets/img/logo/logo_200.png'; 
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/authAction';

import FormValidator from '../utils/formValidator'
import {rulerLogin} from '../utils/rulerValid'

class AuthForm extends React.Component {
  state = {
    user: {
      email: '@gmail.com',
      password: '123456789',
      confirmPassword: ''
    },
    validation: [{ isValid: false }],
    errors: {}
  }

  handleChange = prop => event => {
    let value = event.target.value;
    const user = this.state.user;
    this.setState({ user: { ...this.state.user, [prop]: value } })
    
    this.validation(user)
  }

  validation = (state) => {
    const validatord = new FormValidator(rulerLogin);
    // let's suppose that state is
    const validation = validatord.validate(state)
    this.setState({ validation })
    
    return validation;
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const user = this.state.user;
    const validation = this.validation(user)
    
    if (validation.isValid) {  // if it's valid
      // handle form submission here
      //this.props.login(user)
      this.props.history.push('/admin');
      
    }
    
  };

  render() {
    const { validation } = this.state;
    const {
      showLogo,
      children,
      onLogoClick,
      error
    } = this.props;
    const { email, password } = this.state.user;
    return (      
      <Form onSubmit={this.handleSubmit}>
        
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup >
          <Label for="Email">Email</Label>
          
          <Input 
            type='email'
            placeholder="your@email.com"
            value={email}
            className={validation.email ?
              validation.email.isInvalid ? 'is-invalid' : ''
              : ' '}
            onChange={this.handleChange('email')} />
          <div className="invalid-feedback">{validation.email ? validation.email.message : ' '}</div>          
          
        </FormGroup>
        
        <FormGroup>
          <Label for="Password">Password</Label>
          
          <Input 
            type="password"
            placeholder="your password"
            value={password}
            className={validation.password ?
              validation.password.isInvalid ? 'is-invalid' : ''
              : ' '}
            onChange={this.handleChange('password')} />
          <div className="invalid-feedback">{validation.password ? validation.password.message : ''}</div>
          
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>
        </FormGroup>
        
        { error ?
            (<Alert color="danger">{error.errors}</Alert>)
          : ''
        }

        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          Login
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
              <Link to="/signup">
                Signup
              </Link>
            
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}


AuthForm.propTypes = {  
  showLogo: PropTypes.bool,  
  onLogoClick: PropTypes.func,
  login: PropTypes.func.isRequired 
};

AuthForm.defaultProps = {  
  showLogo: true,  
  onLogoClick: () => {},
};

const mapStateToProps = state => ({
  error: state.auth.errors_login
})

export default connect(mapStateToProps, {login})(AuthForm);
