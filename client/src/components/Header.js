import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';
import Logo from '../images/circle-cropped.png';
import 'materialize-css';
import { NavItem, Navbar, Icon } from 'react-materialize';

class Header extends Component {

      renderContent() {
            switch(this.props.auth) {
                  case null:
                        return;

                  case false:
                        return (
                              <React.Fragment>
                              <li ><Link to="" className="black-text" style={{fontWeight:'500', fontSize: '1.2rem'}}>Blog</Link></li>
                              <li ><Link to="" className="black-text" style={{fontWeight:'500', fontSize: '1.2rem'}}>Services</Link></li>
                              <li ><Link to="" className="black-text" style={{ fontWeight:'500', fontSize: '1.2rem'}}>Contact</Link></li>
                              <li><a style={{color:'black', fontWeight:'500', fontSize: '1.2rem'}} href="/auth/google">Sign in</a></li>
                              </React.Fragment>
                        );

                  default:
                        return (
                              <div>
                                    <li key="1"><Payments  /></li>
                                    <li key="2"><a href=""  className="black-text" style={{color:'black', fontFamily:'Helvetica', fontWeight:'500', fontSize: '1.2rem'}}>{`Credits : ${this.props.auth.credits}`}</a></li>
                                    <li key="3"><a  href="/api/logout" className="black-text" style={{color:'black', fontFamily:'Helvetica', fontWeight:'500', fontSize: '1.2rem'}}>Logout</a></li>
                        </div >
                        );
            }
      }

      render() {
            return(
                                          <Navbar
                                          style={{height: '8rem'}}
                                          className="grey lighten-4"
                                          alignLinks="right"
                                          brand={<Link to={ this.props.auth ? '/surveys' : '/' } >
                                                             <img style={{ width: "2.7em", margin:"1rem 1rem"}} className="circle responsive-img" src={Logo} alt="logo"/>
                                                       </Link>}
                                          id="mobile-nav"
                                           menuIcon={<div style={{margin:"1.5rem 1rem"}}><Icon className="black-text" >menu</Icon></div>}
                                          options={{
                                          draggable: true,
                                          edge: 'left',
                                          inDuration: 250,
                                          onCloseEnd: null,
                                          onCloseStart: null,
                                          onOpenEnd: null,
                                          onOpenStart: null,
                                          outDuration: 200,
                                          preventScrolling: true
                                          }}>
                                    <NavItem style={{ margin: '1.6rem 0' }}>
                                    {this.renderContent()}
                                    </NavItem>
                                    </Navbar>
            );
      }
}

function mapStateToProps({ auth }) {
      return { auth };
}

export default connect(mapStateToProps) (Header);