import React from  'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Dashboard from './Dashboards/dashboard';
import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/serveyNew';


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
                                    <Route path="/surveys" exact component={Dashboard}/>
                                    <Route path="/surveys/new" exact component={SurveyNew}/>
                              </Switch>
                        </Router>
                  </div>
            );
      }
}


export default connect(null, actions) (App);