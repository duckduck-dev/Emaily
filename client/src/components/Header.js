import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png';
import Payments from './payments';

class Header extends Component {

      renderContent() {
            switch(this.props.auth) {
                  case null:
                        return;

                  case false:
                        return (
                              <li><a style={{color:'black'}} href="/auth/google"><img className="circle responsive-image" style={{width:'5vh', paddingTop:'1rem'}} src="http://pngimg.com/uploads/google/google_PNG19630.png" /></a></li>
                        );

                  default:
                        return [
                              <React.Fragment>
                              <li key="1"><Payments /></li>
                              <li key="2"><a style={{color:'black'}} href="/api/logout">Logout</a></li>
                              </React.Fragment>
                        ];
            }
      }
      render() {
            return(
                  <nav style={{height:'500px'}}>
                        <div className="nav-wrapper cyan lighten-4">
                              <Link to={ this.props.auth ? '/surveys' : '/' } 
                                    className="left brand-logo " style={{marginLeft:'3vw', color:'black'}}>
                                    <i  style={{fontSize:'6.7vh', color:'#333333', marginTop:'1.2rem'}}className="fas fa-circle-notch fa-spin"></i>
                                    <div style={{margin:'1.1rem 0 0 1rem', position:'absolute', color:'#424242', fontWeight:'bold', fontSize:'2.5rem'}}>E</div>
                              </Link>
                              <ul className="right" style={{margin:'1rem 1vw 0 0'}}>
                                   {this.renderContent()}
                              </ul>
                        <div  style={{margin:'10rem 0 0 7rem', position: "absolute", color:'#424242'}}><h1>
                              Emaily!!!
                        </h1>
                        Collect feedback from your users
                        </div>
                        </div>
                  </nav>
            );
      }
}

function mapStateToProps({ auth }) {
      return { auth };
}

export default connect(mapStateToProps) (Header);