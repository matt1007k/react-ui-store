import SignUpForm from '../../components/SignUpForm';
import React from 'react';
import { Card, Col, Row } from 'reactstrap';

class SignUpPage extends React.Component {
  
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
            <SignUpForm
              {...this.props}
              onLogoClick={this.handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignUpPage;
