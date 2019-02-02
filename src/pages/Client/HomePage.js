import React, { Component } from 'react'
import SliderLanding from '../../components/SliderLanding';
import { Row, Col, Card, CardBody, CardText, CardSubtitle, Container } from 'reactstrap'

import {
  MdLocalShipping,
  MdHistory,
  MdSettingsBackupRestore,
  MdVerifiedUser
} from 'react-icons/lib/md'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <SliderLanding />
        <Container className="mt-3 mb-3">
          <Row>
            <Col md={3} xs={12}>
              <Card>
                <CardBody className="d-flex justify-content-center align-items-center flex-column">
                  <MdLocalShipping size={44} className="mb-2"/>
                  <CardSubtitle>Free Delivery</CardSubtitle>
                  <CardText>
                    <small>Free Shipping on all order</small>
                  </CardText>
                </CardBody>
              </Card>  
            </Col>
            <Col md={3} xs={12}>
              <Card>
                <CardBody className="d-flex justify-content-center align-items-center flex-column">
                  <MdSettingsBackupRestore size={44} className="mb-2"/>
                  <CardSubtitle>Return Policy</CardSubtitle>
                  <CardText>
                    <small>Free Shipping on all order</small>
                  </CardText>
                </CardBody>
              </Card>  
            </Col>
            <Col md={3} xs={12}>
              <Card>
                <CardBody className="d-flex justify-content-center align-items-center flex-column">
                  <MdHistory size={44} className="mb-2"/>
                  <CardSubtitle>24/7 Support</CardSubtitle>
                  <CardText>
                    <small>Free Shipping on all order</small>
                  </CardText>
                </CardBody>
              </Card>  
            </Col>
            <Col md={3} xs={12}>
              <Card>
                <CardBody className="d-flex justify-content-center align-items-center flex-column">
                  <MdVerifiedUser size={44} className="mb-2"/>
                  <CardSubtitle>Secure Payment</CardSubtitle>
                  <CardText>
                    <small>Free Shipping on all order</small>
                  </CardText>
                </CardBody>
              </Card>  
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomePage
