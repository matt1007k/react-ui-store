import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    Row,
    Col,
    Button,
    Card,
    CardHeader,
    CardSubtitle,
    CardBody,
    Table,
    Input,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import {
    MdEdit,
    MdClear,
    MdSearch,
    MdAddBox
} from 'react-icons/lib/md'

import Page from '../../../components/Page';
import {getCategories} from '../../../actions/categoriesAction';

class CategoriesPage extends React.Component {
    state = {
      
    };

    componentWillMount() {
        this.props.getCategories();        
    }

    render() {
    return (
      <Page
        className="CategoriesPage"
        title="Categories"
        breadcrumbs={[{ name: 'Categories', active: true }]}
        >
            <Row>
                <Col md={12}>
                    <Card>
                        <CardHeader>
                            <CardSubtitle>Todas las categorias</CardSubtitle>                            
                        </CardHeader>
                        <CardBody>
                            <div className="row d-flex justify-content-between pb-2">
                                <div className="d-flex">
                                    <Input type="text"
                                        name="search"
                                        id="search" placeholder="Buscar una categoria..." />
                                    <Button color="primary"><MdSearch size={18}/></Button>
                                </div>
                                <Button color="success"><MdAddBox size={18}/> categoria</Button>
                            </div>
                            <div className="row">
                                <p>Total de registros {this.props.categories.length}</p>
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nombre</th>
                                            <th>Descricion</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.categories.length > 0 ?
                                            this.props.categories.map((category, index) => (
                                                <tr key={index}>
                                                    <td >{category.id}</td>
                                                    <td >{category.name}</td>
                                                    <td>{category.description}</td>
                                                    <td>
                                                        <Button outline color="info" size="sm"><MdEdit size={18} /></Button>{' '}                                                 
                                                        <Button color="danger" size="sm"><MdClear size={18} /></Button>
                                                    </td>
                                                </tr> 
                                            ))
                                            : <tr>No hay registros!</tr>    
                                        }
                                    </tbody>
                                </Table>
                            </div>

                            <div className="row d-flex justify-content-center">
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#" />
                                    </PaginationItem>
                                </Pagination>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <h1>List categories</h1>
            
      </Page>
    );
  }
}

CategoriesPage.protoTypes = {
    categories: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps,
    {
        getCategories
    })(CategoriesPage);
