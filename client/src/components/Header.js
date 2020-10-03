import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './payments';

class Header extends Component {

      renderContent() {
            switch(this.props.auth) {
                  case null:
                        return;

                  case false:
                        return (
                              <React.Fragment>
                              <li style={{color:'black'}} className="align-center">blog</li>
                              <li><a style={{color:'black'}} href="/auth/google"><img className="circle responsive-image" style={{width:'5vh', paddingTop:'1rem'}} src="http://pngimg.com/uploads/google/google_PNG19630.png" alt="google sigin" /></a></li>
                              </React.Fragment>
                        );

                  default:
                        return [
                              <li key="1"><Payments /></li>,
                              <li key="2"><div href="" style={{ color: 'black', margin:'0 10px' }}>{`Credits : ${this.props.auth.credits}`}</div></li>,
                              <li key="3"><a  href="/api/logout">Logout</a></li>
                                     ];
            }
      }
      render() {
            return(
                  <nav style={{ height: '7rem' }}>
                        <div className="nav-wrapper white">
                              <Link to={ this.props.auth ? '/surveys' : '/' } 
                                    className="left brand-logo " style={{marginLeft:'3vw', color:'black'}}>
                                    <div style={{margin:'1.1rem 0 0 1rem', position:'absolute', color:'#424242', fontWeight:'bold', fontSize:'2.5rem'}}>ThunderMail</div>
                              </Link>
                              <ul className="right" >
                                   {this.renderContent()}
                              </ul>
                             
                        </div>
                  </nav>
            );
      }
}

function mapStateToProps({ auth }) {
      return { auth };
}

export default connect(mapStateToProps) (Header);