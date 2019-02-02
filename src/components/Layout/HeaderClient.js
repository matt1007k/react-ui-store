import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink as BSNavLink,   
    Card,
    CardBody,
    Row, 
    Col
} from 'reactstrap'

import {
    MdAccountCircle,
    MdPhone,
    MdMail,
    MdSearch
} from 'react-icons/lib/md'

import Select from 'react-select'
import bn from 'utils/bemnames'

const bem = bn.create('header')

const moneyTypes = [
    { 'value': 'USD','label': '$ US Dolar' },
    { 'value': 'EUR','label': '€ EUR Euro' }
]
 
const langTypes = [
    { 'value': 'en','label': 'English' },
    { 'value': 'es','label': 'Spanish' }
]

const styleSelect = {
    border: 'none',
    backgroundColor: 'red'
}

class HeaderClient extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: false
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
   
    render() {
        const { title } = this.props;
        return (
            <header>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={4} xs={12} className="d-flex align-items-center justify-content-center">
                                <span className="mr-2"><MdPhone size={20}/> 653 365 852</span>
                                <span><MdMail size={20}/> example@mail.com</span>
                            </Col>
                            <Col md={4} xs={12} className="d-flex align-items-center justify-content-center ">
                                <span className="mr-3" style={{width: '130px'}}>
                                    <Select
                                        styles={styleSelect} 
                                        defaultValue={langTypes[0]}
                                        options={langTypes}
                                    />
                                </span>
                                <span className="mr-4" style={{width: '160px'}}>                                    
                                    <Select
                                        styles={styleSelect} 
                                        defaultValue={moneyTypes[0]}
                                        options={moneyTypes}
                                    />
                                </span>
                            </Col>
                            <Col md={4} xs={12} className="d-flex align-items-center justify-content-center ">
                                                      
                                <span className="mr-2">
                                    <NavLink to="/signup" className="text-dark"><MdAccountCircle size={20} /> Crear cuenta</NavLink>
                                </span> 
                                <span className="mr-2">|</span>
                                <span><NavLink to="/login" className="text-dark">Iniciar sesion</NavLink></span>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>           
                <Navbar light expand className={bem.b('bg-white')}>
                    <NavbarBrand tag={NavLink} to="/home">
                        {title}
                    </NavbarBrand>
                    <Nav navbar className={bem.e('nav-right')}>
                        <NavItem>
                            <BSNavLink tag={NavLink} to="/home">Inicio</BSNavLink>
                        </NavItem>
                        <NavItem>
                            <BSNavLink tag={NavLink} to="/store">Store</BSNavLink>
                        </NavItem>
                        <NavItem>
                            <BSNavLink tag={NavLink} to="/about">About</BSNavLink>
                        </NavItem>
                        <NavItem>
                            <BSNavLink tag={NavLink} to="/contact">Contact</BSNavLink>
                        </NavItem>
                        <NavItem>
                            <BSNavLink><MdSearch size={25}/></BSNavLink>
                        </NavItem>
                    </Nav>
                
                </Navbar>
            </header>
        )
    }
}

export default HeaderClient
