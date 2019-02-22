import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../actions/authAction';

import FormValidator from '../utils/formValidator'
import {rulerRegister} from '../utils/rulerValid'

class SignUpForm extends React.Component {
  state = {
    user: {
      email: 'max@example.com',
      password: '1234567',
      confirmPassword: '1234567'
    },
    validation: [{ isValid: false }],
    status: 'warning'
  }

  handleChange = prop => event => {
    let value = event.target.value;
    const user = this.state.user;
    this.setState({ user: { ...this.state.user, [prop]: value } })
    
    this.validation(user)
  }

  validation = (state) => {
    const validatord = new FormValidator(rulerRegister);
    // let's suppose that state is
    const validation = validatord.validate(state)
    this.setState({ validation })
    
    return validation;
  }

  

  handleSubmit = event => {
    event.preventDefault();
    const { status } = this.state;
    const user = this.state.user;
    const validation = this.validation(user)

    if (validation.isValid) { 
      this.props.register(user);
      
      if (status === 'success') {
        console.log('no error');
        this.props.history.push('/admin');
      } 
      console.log(status);

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
    const { email, password, confirmPassword } = this.state.user;
    return (      
      <Form onSubmit={this.handleSubmit.bind(this)}>
        
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

        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          
          <Input 
            type="password"
            placeholder="confirm your password"
            value={confirmPassword}
            className={validation.confirmPassword ?
              validation.confirmPassword.isInvalid
              || confirmPassword !== password ? 'is-invalid' : ''
              : ' '}
            onChange={this.handleChange('confirmPassword')} />
            <div className="invalid-feedback">{
              validation.confirmPassword
              || confirmPassword !== password ?
              validation.confirmPassword.message
              || 'The passwords aren\'t equals' : ''}</div>
          
        </FormGroup>
        
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Agree the terms and policy 
          </Label>
        </FormGroup>
        
        { error ?
          (<Alert color="danger" className="no-margin">
            <ul className="no-margin">
              {error.errors.full_messages.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </Alert>)
          : ''
        }

        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          Register
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>            
              <Link to="/login">
                Sign In
              </Link>           
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

SignUpForm.propTypes = {  
  showLogo: PropTypes.bool,  
  onLogoClick: PropTypes.func,
  register: PropTypes.func.isRequired 
};

SignUpForm.defaultProps = {  
  showLogo: true,  
  onLogoClick: () => {},
};

const mapStateToProps = state => ({
  error: state.auth.errors_register
})

export default connect(mapStateToProps, {register})(SignUpForm);
