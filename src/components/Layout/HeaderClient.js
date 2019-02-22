import React from 'react'
import PropTypes from 'prop-types'

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
    Col,
    Popover,
    PopoverBody,
    ListGroup,
    ListGroupItem,
} from 'reactstrap'

import {
    MdAccountCircle,
    MdPhone,
    MdMail,
    MdSearch,
    MdPersonPin,             
    MdInsertChart,           
    MdMessage,               
    MdSettingsApplications,  
    MdHelp,                  
    MdExitToApp,             
} from 'react-icons/lib/md'

import { connect } from 'react-redux'
import { logOut } from '../../actions/authAction'

import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';

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
        this.logout = this.logout.bind(this)
        this.state = {
            collapsed: false,
            isOpenUserCardPopover: false,
           
        };        
    }

    componentDidMount() {
        console.log(this.props.props);
        
    }

    logout = () => {
        this.props.logOut();
        //this.props.history.push('/login');
    }
    toggleUserCardPopover = () => {
        this.setState({
          isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
        });
    };
    
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
   
    render() {
        const { title, auth } = this.props;
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
                                                    
                                {
                                    !auth.token ?
                                        (<div>
                                            <span className="mr-2">
                                                <NavLink to="/signup" className="text-dark"><MdAccountCircle size={20} /> Crear cuenta</NavLink>
                                            </span> 
                                            <span className="mr-2">|</span>
                                            <span><NavLink to="/login" className="text-dark">Iniciar sesion</NavLink></span>
                                        </div>) :
                                        (<Nav>
                                            <NavItem>
                                            <BSNavLink id="Popover2">
                                                <Avatar
                                                    onClick={this.toggleUserCardPopover}
                                                    className="can-click"
                                                    />
                                                {auth.email}
                                            </BSNavLink>
                                            <Popover
                                            placement="bottom-end"
                                            isOpen={this.state.isOpenUserCardPopover}
                                            toggle={this.toggleUserCardPopover}
                                            target="Popover2"
                                            className="p-0 border-0"
                                            style={{ minWidth: 250 }}>
                                            <PopoverBody className="p-0 border-light">
                                                <UserCard
                                                title={auth.name}
                                                subtitle={auth.email}
                                                text="Last updated 3 mins ago"
                                                className="border-light">
                                                <ListGroup flush>
                                                    <ListGroupItem tag="button" action className="border-light">
                                                        <MdPersonPin /> Profile
                                                    </ListGroupItem>
                                                    <ListGroupItem tag="button" action className="border-light">
                                                        <MdInsertChart /> Stats
                                                    </ListGroupItem>
                                                    <ListGroupItem tag="button" action className="border-light">
                                                        <MdMessage /> Messages
                                                    </ListGroupItem>
                                                    <ListGroupItem tag="button" action className="border-light">
                                                        <MdSettingsApplications /> Settings
                                                    </ListGroupItem>
                                                    <ListGroupItem tag="button" action className="border-light">
                                                        <MdHelp /> Help
                                                    </ListGroupItem>
                                                    <ListGroupItem tag="button" action className="border-light" onClick={this.logout}>
                                                        <MdExitToApp /> Signout
                                                    </ListGroupItem>
                                                </ListGroup>
                                                </UserCard>
                                            </PopoverBody>
                                            </Popover>
                                            
                                            </NavItem>
                                        </Nav>)
                                }
                            </Col>
                        </Row>
                    </CardBody>
                </Card>           
                <Navbar light expand className={bem.b('bg-white')}>
                    <NavbarBrand tag={NavLink} to="/">
                        {title}
                    </NavbarBrand>
                    <Nav navbar className={bem.e('nav-right')}>
                        <NavItem>
                            <BSNavLink tag={NavLink} to="/">Inicio</BSNavLink>
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

HeaderClient.propTypes = {
    auth: PropTypes.object.isRequired,
    logOut: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logOut})(HeaderClient)
