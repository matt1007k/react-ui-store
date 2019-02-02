import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Col, Row, Button } from 'reactstrap';

const NoFoundPage = () => {
  return (
    <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
            <Card body style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <h1 className="text-danger">404</h1>
                <p>This page no found</p>
                <Button tag={Link} to="/" outline color="primary">Return home</Button>  
            </Card>
        </Col>
    </Row>
  )
}

export default NoFoundPage
