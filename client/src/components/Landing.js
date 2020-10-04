import React from 'react';
import { Button } from 'react-materialize';
import Typist from 'react-typist';
import pic from '../images/ss-banner-customer-experience.png';

const Landing = () => {

      const renderContent = () => {
            return(
                  <div className="center" style={{ margin: '8rem 2rem 0 2rem', fontSize: '4.5vmin' }}> 
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
                        {renderContent()}
                        <div className="center">
                              <ul>
                              <li>Power-up your experience management programs.</li>
                              <li></li>
                              </ul>
                        </div>
                        <div className="center">
                              <Button className="yellow black-text" node="button" style={{marginRight: '5px' }} waves="light">Get started</Button>
                        </div>
                        <img style={{width: '30vw'}} className= "responsive-img" src={pic} alt="pic"/>

            </div>
      );
};

export default Landing;