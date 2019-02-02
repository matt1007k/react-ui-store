import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from 'components/Page';
import {getProducts} from '../../actions/productsAction';

class ProductsPage extends React.Component {
  state = {
  };

    componentWillMount() {
        this.props.getProducts();        
    }

  render() {
    return (
      <Page
        className="ProductsPage"
        title="Products"
        breadcrumbs={[{ name: 'Products', active: true }]}
      >
            <h1>List Products</h1>
            {
                this.props.products.length > 0 ?
                this.props.products.map((product, index) => (
                    <div key={index}>
                        <h3 >{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))
                : <p>No product</p>    
            }
      </Page>
    );
  }
}

ProductsPage.protoTypes = {
    products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps,
    {
        getProducts
    })(ProductsPage);
