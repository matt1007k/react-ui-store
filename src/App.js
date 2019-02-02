import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout, PageLayout } from 'components/Layout';

// pages
import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';
import ProductsPage from './pages/admin/ProductsPage';

import NoFoundPage from 'pages/errors/NoFoundPage';

import HomePage from './pages/Client/HomePage';

import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Switch } from 'react-router-dom';
import './styles/reduction.css';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/"
              layout={PageLayout}
              component={HomePage}
            />
            <LayoutRoute
              exact
              path="/login"
              layout={PageLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={PageLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />
            <LayoutRoute
              exact
              path="/admin"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              exact
              path="/products"
              layout={MainLayout}
              component={ProductsPage}
            />
            <LayoutRoute
              exact
              path="/categories"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              exact
              path="/users"
              layout={MainLayout}
              component={DashboardPage}
            />
            <LayoutRoute
              layout={EmptyLayout}
              component={NoFoundPage}            
            />
          </Switch>
        </GAListener>
      </BrowserRouter>
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

export default componentQueries(query)(App);
