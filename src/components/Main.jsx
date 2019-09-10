import React from 'react';
// can't delete Router or it won't work
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import '../css/navBar.css';
import Connect from './Connect';
import Portfolio from './Portfolio';
import Home from './Home';
import Project from './Project';
import About from './About';

import '../css/sticky-footer.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class='main-container'>
                <div className='row'>
                    <nav className='fixed-top'>
                        <ul>
                            <NavLink to="/personal-website/main/home" className="tab">
                                home</NavLink>
                            <NavLink to="/personal-website/main/portfolio" className="tab">
                                portfolio</NavLink>
                            <NavLink to="/personal-website/main/project" className="tab">
                                project</NavLink>
                            <NavLink to="/personal-website/main/about" className="tab">
                                about</NavLink>
                            <NavLink to="/personal-website/main/connect" className="tab">
                                connect</NavLink>
                            </ul>
                    </nav>
                </div>

                {/* solution 2 for centering body content (clearing the format of nav bar */}
                {/* <div style={{clear:'both'}}></div> */}
                <div style={{height:'100%'}}>
                    <Switch>
                        <Route path="/personal-website/main/home" component={Home} />
                        <Route path="/personal-website/main/Connect" component={Connect} />
                        <Route path="/personal-website/main/portfolio" component={Portfolio} />
                        <Route path="/personal-website/main/project" component={Project} />
                        <Route path="/personal-website/main/about" component={About} />
                        <Route component={() => <Redirect to={"/personal-website/main/home"} />} />
                    </Switch>
                </div>

                <footer>
                    <p> &copy; 2019 Serena Yan - All rights reserved </p>
                </footer>
            </div>
        );
    }
}

export default Main;