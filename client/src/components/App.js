import React from  'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';


const dashboard = () => {
      return(<div>dashboard</div>);
}


const newSurvey = () => {
      return(<div>newSurvey</div>);
}

class App extends React.Component {

      componentDidMount() {
            this.props.fetchUser();
      }

      render() {
            return(
                  
                  <div>
                        <Router>
                              <Header/>
                              <Switch>
                                    <Route path="/" exact component={Landing}/>
                              </Switch>
                              <Switch>
                                    <Route path="/surveys" exact component={dashboard}/>
                              </Switch>
                              <Switch>
                                    <Route path="/surveys/new" exact component={newSurvey}/>
                              </Switch>
                        </Router>
                  </div>
            );
      }
}


export default connect(null, actions) (App);