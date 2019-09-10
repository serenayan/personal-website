import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/personal-website/main" component={Main} />
              <Route path="/personal-website/login" component={Login} />
              <Route component={() => <Redirect to={"/personal-website/main"} />} />
            </Switch>
          </Router>
        );
    }
}

export default App; 