import LoginForm from '../../components/LoginForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class LoginPage extends React.Component {
  
  handleLogoClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <LoginForm
              {...this.props}
              onLogoClick={this.handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LoginPage;
