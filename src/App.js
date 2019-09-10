import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/main" component={Main} />
              <Route path="/login" component={Login} />
              <Route component={() => <Redirect to={"/main"} />} />
            </Switch>
          </Router>
        );
    }
}

export default App; 