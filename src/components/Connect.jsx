import React from 'react';
import github from '../images/github.svg';
import email from '../images/email.png';
import linkedin from '../images/linkedin.jpg';
import '../css/hoverLight.css';

class Connect extends React.Component{
    render() {
        return (
            <div className='container' style={{paddingTop: '50px', paddingBottom:'150px'}}>
                <h2 className="text-center" 
                    style={{paddingTop:'90px', color:'rgb(75,75,75)'}}>
                    Connect with me through ...</h2>
                <div className='row'>
                    <div className='col'>
                        <a href="https://github.com/serenayan/" target="_blank">
                            <img class="rounded-circle mx-auto hover-light" 
                            src={github} alt="github Logo"/>
                        </a>
                        <h5>GitHub</h5>
                    </div>
                    <div className='col'>
                        <a href="https://www.linkedin.com/in/serena-yan-475824178/" target="_blank">
                            <img class="rounded-circle mr-3 hover-light" 
                            src={linkedin} alt="linkedin Logo"/>
                        </a>
                        <h5>LinkedIn</h5>
                    </div>
                    <div className='col'>
                        <a href="mailto:syan@caltech.edu">
                            <img class="rounded-circle mr-3 hover-light" 
                            src={email} alt="email Logo"/>
                        </a>
                        <h5>Email</h5>
                    </div>
                </div>
            </div>
        );
    }
            
}
export default Connect;