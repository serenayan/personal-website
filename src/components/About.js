import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

import me from '../images/me.jpg';

class About extends React.Component{
    render() {
        return (
            <div>
                <div class='row justify-content-md-center'>
                    <div class='col-md-2'>
                        <h1 
                        style={{color: 'rgb(75,75,75)', 
                                paddingTop:"90px", 
                                paddingRight: '0px'}}>
                            Serena Yan</h1>
                        <h6
                        style={{color: 'rgb(85,85,85)',  
                        paddingRight: '0px'}}>
                            Student at Caltech</h6>
                    </div>
                    <img class="rounded-circle mr-3" src={me} alt="React Logo" 
                    height='100' width='100' style={{marginTop:'80px', opacity:'0.9'}}/>
                </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 summer"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Keymobile</h3>
                    <h5 className="vertical-timeline-element-subtitle">Web Development Intern</h5>
                    <h5 className="vertical-timeline-element-subtitle">Guangzhou, China</h5>
                    <p>
                    Full stack web development; develop data governance and visualization application for financial institutions
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 summer"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Virtualitics</h3>
                    <h5 className="vertical-timeline-element-subtitle">Software Development Intern</h5>
                    <h5 className="vertical-timeline-element-subtitle">Pasadena, CA</h5>
                    <p>
                    Prototype data visualization and analysis software in Augmented Reality environments (Hololens and Magic Leap)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2019 summer"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">TechX Academy</h3>
                    <h5 className="vertical-timeline-element-subtitle">Academic Lead</h5>
                    <h5 className="vertical-timeline-element-subtitle">Shanghai, China</h5>
                    <p>
                    TA the Video Game Development course and Human Computer Interaction course for high school technology academy
                    </p> <br/>
                    <a href="https://www.techx.academy" class="btn btn-outline-dark btn-md" target="_blank" role="button" aria-disabled="true">WEBSITE</a>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018 - 2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">California Institute of Technology</h3>
                    <h5 className="vertical-timeline-element-subtitle">Bachelor of Science</h5>
                    <h5 className="vertical-timeline-element-subtitle">Pasadena, CA</h5>
                    <p>
                    Computer Science and Business, Economics, Management major <br/>
                    GPA: 4.0 / 4.0 <br/>
                    Executive Director of Student Investment Funds, NCAA Division III varsity swimmer, Women in STEM member 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2017 summer"
                    iconStyle={{ background: 'rgb(255, 95, 95)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">National High School Game Academy</h3>
                    <h5 className="vertical-timeline-element-subtitle">Summer program @Carnegie Mellon University</h5>
                    <h5 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h5>
                    <p>
                    Producer, Programmer, Artist <br/>
                    Develop virtual reality simulation on Oculus and Leap Motion</p>
                    <br/>
                    <a href="https://admission.enrollment.cmu.edu/pages/pre-college-nhsga" 
                    class="btn btn-outline-dark btn-md" target="_blank" role="button" aria-disabled="true">WEBSITE</a>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2014 - 2018"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">North Allegheny High School</h3>
                    <h5 className="vertical-timeline-element-subtitle">High School Diploma</h5>
                    <h5 className="vertical-timeline-element-subtitle">Pittsburgh, PA</h5>
                    <p>
                    GPA: 4.69 / 4.00 <br/>
                    ACT: 35 / 36 <br/>
                    National Merit Scholarship recipient, Coca-Cola Scholarship finalist, 
                    National Honor Society member, Dean's List
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
            </div>
        );
    }
            
}
export default About;