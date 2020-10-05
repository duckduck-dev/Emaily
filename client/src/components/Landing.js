import React from 'react';
import { Button, Col, Row, TextInput, Icon } from 'react-materialize';
import Typist from 'react-typist';
import pic from '../images/ss-banner-customer-experience.png';
import banner from '../images/ss-banner-employee-experience.png';

const Landing = () => {

      const renderContent = () => {
            return(
                  <div className="center" style={{ fontSize: '4.5vmin' }}> 
                     <Typist  blink= "true">
                        <span style={{background:'yellow'}}>Will my product be a success or a flop?</span>
                        <Typist.Backspace count={39} delay={400} />
                        <span style={{background:'lightgreen'}}>Are my customers actually satisfied?</span>
                        <Typist.Backspace   count={36} delay={400} />
                        <span style={{background:'skyblue'}}>Are my employees happy at work?</span>
                        <Typist.Backspace count={31} delay={400} />    
                        <span style={{background:'#FFDAB9'}}>Do people like attending my events?</span> 
                  </Typist>
                  </div>
            );
      };

      return(
            <div>
                  <div className="hide-on-small-only">
                        <Row >
                        <Col l={8} m={6}>
                              <div style={{margin: '10rem 2rem 0 2rem'}}>{renderContent()}</div>
                        <div className="center">
                              <ul style={{fontSize:'1.2rem'}}>
                              <li>Power-up your experience management programs.</li>
                              <li style={{margin: '1rem 0 0 0'}}>One Platform, Many Solutions</li>
                              </ul>
                              <Button className="yellow black-text" node="button" style={{marginRight: '5px' }} waves="light">Get started</Button>
                        </div>
                        </Col>
                        <Col l={4} m={6}>
                        <img style={{width: '42vh', margin: '5rem 0rem 0 0.7rem' }} className= "responsive-img" src={pic} alt="pic"/>
                        </Col>
                        <Col l={8} m ={6}>
                        <div className="center left hide-on-med-only" style={{color: '#00BFFF', margin: '10vh 0 0 23vw'}}>
                                    <TextInput style={{color: 'orangered' }} id="TextInput-4" label="Email" validate/>
                                    <Button className="blue" floating icon={<Icon>send</Icon>}  large node="button"  waves="light"/>
                        </div>
                        </Col>
                        <Col l = {4} m ={6}>
                              <div className="right hide-on-med-only" style={{fontSize:'2rem', margin: '3vw 0 0 0'}}>
                                    <ul><li style={{margin:'5vw 11vw 0 0'}}>You've got <span style={{fontWeight:'1000'}} className="red-text">#workgoals.</span></li>
                                    <li style={{margin:'1vh 11vw 0 0', fontWeight:'500'}}>We'll help you meet them.</li></ul>
                              </div>
                        </Col></Row>
            </div>
            <div className="hide-on-med-and-up">
                        <div className="center">
                              <img style={{width: '16rem', margin: '2rem 0'}} className= "responsive-img" src={pic} alt="pic"/>
                        </div>
                        {renderContent()}
                        <div className="center">
                              <ul style={{fontSize:'1.2rem'}}>
                              <li>Power-up your experience management programs.</li>
                              <li style={{margin: '1rem 0 0 0'}}>One Platform, Many Solutions</li>
                              <li></li>
                              </ul>
                        </div>
                        <div className="center">
                              <Button className="yellow black-text" node="button" style={{marginRight: '5px' }} waves="light">Get started</Button>
                        </div>
                        <div className="center" style={{fontSize:'2rem', margin: '3vw 0 0 0'}}>
                              <ul><li style={{margin:'5vw 0 0 0'}}>You've got <span style={{fontWeight:'1000'}} className="red-text">#workgoals.</span></li>
                              <li style={{margin:'1vh 0vw 0 0'}}>We'll help you meet them.</li></ul>
                        </div>
            </div>
            </div>
      );
};

export default Landing;