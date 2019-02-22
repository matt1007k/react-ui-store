import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux'

const PrivateRoute = ({ isAutheticated, isAdmin, component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutheticated && isAdmin ?
      (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
        ) :
      <Redirect to="/" />
    }
  />
);
const mapStateToProps = state => ({
  isAutheticated: !!state.auth.token, 
  isAdmin: state.auth.role === 'admin'
}) 

export default connect(
  mapStateToProps
)(PrivateRoute);

