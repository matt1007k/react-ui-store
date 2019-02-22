
import GAListener from 'components/GAListener';
import {
  LayoutRoute, GuestRoute, AuthRoute, PrivateRoute, 
  MainLayout, PageLayout, EmptyLayout
} from 'components/Layout';

// pages
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';

import DashboardPage from 'pages/DashboardPage';
import ProductsPage from './pages/admin/products/ProductsPage';
import CategoriesPage from './pages/admin/categories/CategoriesPage';

import NoFoundPage from 'pages/errors/NoFoundPage';

import HomePage from './pages/Client/HomePage';
import CheckOutPage from './pages/Client/CheckOutPage';

import React from 'react';
import PropTypes from 'prop-types'

import componentQueries from 'react-component-queries';
import { Switch } from 'react-router-dom';
import './styles/reduction.css';



class App extends React.Component {
  render() {
    const { location } = this.props;
    return (
      
        <GAListener>
        <Switch>
            <LayoutRoute
              exact
              path="/"
              location={location}
              layout={PageLayout}
              component={HomePage}
            />
            <AuthRoute
              exact
              path="/checkout"
              location={location}
              layout={PageLayout}
              component={CheckOutPage}
            />
            <GuestRoute
              exact
              path="/login"
              location={location}
              layout={PageLayout}
              component={LoginPage}
            />
            <GuestRoute
              exact
              path="/signup"
              location={location}
              layout={PageLayout}
              component={SignUpPage}
            />
            <PrivateRoute
              exact
              path="/admin"
              location={location}
              layout={MainLayout}
              component={DashboardPage}
            />
            <PrivateRoute
              exact
              path="/products"
              location={location}
              layout={MainLayout}
              component={ProductsPage}
            />
            <PrivateRoute
              exact
              path="/categories"
              location={location}
              layout={MainLayout}
              component={CategoriesPage}
            />
            <PrivateRoute
              exact
              path="/users"
              location={location}
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              location={location}
              layout={EmptyLayout}
              component={NoFoundPage}            
            />
          </Switch>
        </GAListener>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
}


export default componentQueries(query)(App);
