import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, TextInput, Icon } from 'react-materialize';
import Typist from 'react-typist';
import pic from '../images/ss-banner-customer-experience.png';
import banner from '../images/ss-banner-employee-experience.png';
import redStar from '../images/sred.svg';
import yellowStar from '../images/syellow.svg';

const Landing = () => {

      const renderContent = () => {
            return(
                  <div className="center" style={{ fontSize: '4.5vmin'}}> 
                     <Typist  blink= "true">
                        <span style={{background:'yellow'}}>Will my product be a success or a flop?</span>
                        <Typist.Backspace count={39} delay={400} />
                        <span style={{background:'#FFB6C1'}}>Find out what employees really think</span>
                        <Typist.Backspace   count={36} delay={400} />
                        <span style={{background:'skyblue'}}>Are my employees happy at work?</span>
                        <Typist.Backspace count={31} delay={400} />    
                        <span style={{background:'#FFDAB9'}}>Do people like attending my events?</span>
                        <Typist.Backspace count={36} delay={400} />
                        <span style={{background:'lightgreen'}}>Are my customers actually satisfied?</span>
                  </Typist>
                  </div>
            );
      };

      return(
            <div>
                  <div className="hide-on-small-only">
                        <Row >
                        <Col l={8} m={6}>
                              <div style={{margin: '6rem 2rem 0 2rem'}}>{renderContent()}</div>
                        <div className="center">
                        <div style={{fontSize: '1.6rem', margin: '1rem 0 0 0'}} className="red-text">Do more than just <span className="blue-text">#surveys.</span></div>
                              <ul style={{fontSize:'1.2rem'}}>
                              <li>Power-up your experience management programs.</li>
                              <li style={{margin: '1.5rem 0 0 0'}}>One Platform, Many Solutions</li>
                              </ul>
                              <Button className="yellow black-text" node="button" style={{marginRight: '5px' }} waves="light">Get started</Button>
                              <div style={{margin: '1.5rem 0'}}><Link to="" style={{ fontWeight:'1000'}}>Need a demo<span className="red-text">?</span></Link></div>
                        </div>
                        </Col>
                        <Col l={4} m={6}>
                        <img style={{width: '42vh', margin: '5rem 0rem 0 0.7rem' }} className= "responsive-img" src={pic} alt="pic"/>
                        </Col>
                        <div className="hide-on-med-only">
                        <Col l={6}>
                              <div className="center" style={{ width: '20vw', margin: '0rem 0 0 22vmax',fontSize:'1.2rem' }}>
                                    <p>Refine Customer Experiences,</p>
                                    <p>The Better Way</p>
                                    <p className="blue-text" style={{ fontSize:'1.3rem' }}>Get Started With 5 Free Credits.</p>
                                    <input input  className="w3-input w3-border w3-border-blue w3-round-large w3-text-black" name="last" type="text"/>
                                    <Button style={{background:'#DC143C'}} node="button" type="submit" waves="light">Subscribe</Button>
                              </div>
                        </Col>
                        <Col l = {6}>
                                    <div className="right" style={{fontSize:'2vmax', margin: '2vw 0 0 0'}}>
                                          <img style={{width:'4vmax'}}src={redStar} alt="star"/><img style={{width:'3vmax', margin: '0.5rem 0 0 1rem'}}src={yellowStar} alt="star"/>
                                          <ul><li style={{margin:'1.7vw 7vw 0 0'}}>You've got <span style={{fontWeight:'1000'}} className="red-text"><span className="cyan-text">#</span>workgoals.</span></li>
                                          <li style={{margin:'1vh 7vw 0 0', fontWeight:'500'}}>We'll help you meet them.</li></ul>
                                    </div>
                              </Col>
                        </div>
                        </Row>
                        <Row className="hide-on-large-only">
                        <Col m={6}>
                              <div>
                                    <div className="center" style={{ width: '20vw', margin: '0rem 0 0 12vmax',fontSize:'1.2rem' }}>
                                          <p>Refine Customer Experiences,</p>
                                          <p>The Better Way</p>
                                          <p className="blue-text" style={{ fontWeight: '500' }}>Get Started With 5 Free Credits.</p>
                                          <input  input className="w3-input w3-border w3-border-blue w3-round-large w3-text-black" name="last" type="text"/>
                                          <Button style={{background:'#DC143C'}} node="button" type="submit" waves="light">Subscribe</Button>
                                    </div>
                          </div>
                        </Col>            
                        <Col m={6}>
                              <div className="center" style={{fontSize:'2vmax', margin: '6vw 0 0 0'}}>
                                          <img style={{width:'4vmax'}}src={redStar} alt="star"/><img style={{width:'3vmax', margin: '0.5rem 0 0 1rem'}}src={yellowStar} alt="star"/>
                                          <ul><li style={{margin:'1.7vw 7vw 0 0'}}>You've got <span style={{fontWeight:'1000'}} className="red-text"><span className="cyan-text">#</span>workgoals.</span></li>
                                          <li style={{margin:'1vh 7vw 0 0', fontWeight:'500'}}>We'll help you meet them.</li></ul>
                               </div>
                        </Col>
                        </Row>


                  <div style={{fontSize:'1.5em', fontWeight: '500'}} className="center">Trusted by <span className="red-text">10+</span> Customers Around the Globe</div>
            </div>
            <div className="hide-on-med-and-up">
                        <div className="center">
                              <img style={{width: '16rem', margin: '2rem 0'}} className= "responsive-img" src={pic} alt="pic"/>
                        </div>
                        {renderContent()}
                        <div className="center">
                              <ul style={{fontSize:'1.2rem'}}>
                              <li>Power-up your experience management programs.</li>
                              <li style={{margin: '0.1rem 0 0 0'}}>One Platform, Many Solutions</li>
                              </ul>
                        </div>
                        <div className="center">
                              <Button className="yellow black-text" node="button" waves="light">Get started</Button>
                              <div style={{margin: '0.5rem 0 0 0'}}><Link to="" style={{ fontWeight:'500'}}>Need a demo<span className="red-text">?</span></Link></div>
                        </div>
                        <p className="red-text center" style={{ fontWeight: '500' }}>Get Started With 5 Free Credits.</p>
                        <div className="center"><input style={{ width: '50%', margin:'1vh 13vh' }} input className="w3-input w3-border w3-border-blue w3-round-large w3-text-black" name="last" type="text"/></div>
                        <div className="center"><Button style={{background:'#DC143C'}} node="button" type="submit" waves="light">Subscribe</Button></div>
                        <div className="center" style={{fontSize:'1.5rem', margin: '3vw 0 0 0'}}>
                              <ul><li style={{margin:'5vw 0 0 0'}}>You've got <span style={{fontWeight:'1000'}} className="red-text"><span className="blue-text">#</span>workgoals.</span></li>
                              <li style={{margin:'1vh 0vw 0 0'}}>We'll help you meet them.</li></ul>
                        </div>
            </div>
            </div>
      );
};

export default Landing;