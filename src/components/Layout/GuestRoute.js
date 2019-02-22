import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux'

const AuthRoute = ({ isAutheticated, component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAutheticated ?
      (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
        ) :
      <Redirect to="/admin" />
    }
  />
);
const mapStateToProps = state => ({
  isAutheticated: !!state.auth.token,
}) 

export default connect(
  mapStateToProps
)(AuthRoute);

