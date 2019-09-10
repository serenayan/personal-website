import React from 'react';
// can't delete Router or it won't work
import { NavLink } from 'react-router-dom';
import '../css/hero.css';
import serena from '../images/serena_hero.jpg';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imgStyle = {
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' + serena + ')',
            height: '100vh',
            backgroundPosition: '50% 30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
        };

        return (
            <div style={imgStyle}>
                <div class="hero-text">
                    <h1>I am Serena Yan</h1>
                    <p>I'm a Programmer, Game Designer, and Artist</p>
                    <NavLink to="/personal-website/personal/main/about" 
                            className="btn btn-outline-light" 
                            role="button">
                                About me</NavLink>
                    <br/><br/>
                    <NavLink to="/personal-website/main/connect" 
                            className="btn btn-outline-light" 
                            role="button">
                                Connect with me</NavLink>
                </div>

                {/* <p>
                    <Link to="/login" onClick={localStorage.removeItem('user')}>Logout</Link>
                </p> */}
            </div>

        );
    }
}

export default Home;