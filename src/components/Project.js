import React from 'react';
import ReactPlayer from 'react-player';
import '../css/videoPlayer.css';
import caltech from '../images/caltech.jpg';
import magic_leap from '../images/Magic-Leap-Tile.jpg';

class Project extends React.Component{
    render() {
        return(
            <ul class="list-untyled">
            <li class="media my-4">
                <img class="rounded-circle mr-3" src="/logo192.png" alt="React Logo" 
                height='200' width='200' style={{marginTop: '70px', backgroundColor:'white'}}/>
                <div class="media-body" style={{marginTop:'70px'}}>
                <h3 class="mt-0 mb-1">Personal Website</h3>
                <h5 class="mt-0 mb-1">Web development</h5>
                This website is my first web development project using React.js.
                I made this as a learning project during my second internship at Keymobile.
                <br/><br/>
                <button type="button" class="btn btn-dark mr-2" disabled>Web Dev</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>JavaScript</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>HTML</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>CSS</button>
                <button type="button" class="btn btn-info mr-2" disabled>React.js</button>
                <button type="button" class="btn btn-info mr-2" disabled>Axios</button>
                <button type="button" class="btn btn-info mr-2" disabled>Bootstrap</button>
                </div>
            </li>
            <li class="media my-4">
                <img class="rounded-circle mr-3" src={magic_leap} alt="Magic Leap Logo" height='200' width='200' />
                <div class="media-body">
                <h3 class="mt-0 mb-1">AR Data Visualization Prototype</h3>
                <h5 class="mt-0 mb-1">AR demo</h5>
                During my first internship at Virtualitics, 
                I prototyped for the company’s data visualization software on the augmented 
                reality platform Magic Leap. The finished product is a working demo that 
                generates various 3D plots from the given data set and let the users interact 
                with the plots through hand gestures, voice command, and/or the controller. 
                (Unable to show demo or source code due to copyright issue.)
                <br/><br/>
                <button type="button" class="btn btn-dark mr-2" disabled>Augmented Reality</button>
                <button type="button" class="btn btn-dark mr-2" disabled>Magic Leap</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>C#</button>
                <button type="button" class="btn btn-info mr-2" disabled>Unity3D</button>
                </div>
            </li>
            <li class="media my-4">
                <ReactPlayer 
                    classNmae='react-player'
                    url='https://youtu.be/fsQYOWj2rOE' 
                    width='30%'
                    height='300px'
                    playing={false}
                    controls={true}
                />
                <div class="media-body">
                <h3 class="mt-0 mb-1">Potion Commotion</h3>
                <h5 class="mt-0 mb-1">VR video game</h5>
                "Potion Commotion" allows players to directly interact with almost anything in the 
                game world and get a hands-on experience of potion mixing. <br/>
                The game was developed on Unity3D. Its VR platforms are Oculus Touch and Leap Motion. 
                <br/><br/>
                <a href="https://github.com/serenayan/Potion_Commotion_Scripts" class="btn btn-outline-dark btn-md" target="_blank" role="button" aria-disabled="true">GITHUB</a>
                <br/><br/>
                <button type="button" class="btn btn-dark mr-2" disabled>Virtual Reality</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>C#</button>
                <button type="button" class="btn btn-info mr-2" disabled>Unity3D</button>
                <button type="button" class="btn btn-info mr-2" disabled>Maya</button>
                <button type="button" class="btn btn-info" disabled>Photoshop</button>
                </div>
            </li>
            <li class="media my-4">
                <ReactPlayer 
                    url='https://youtu.be/jqiEqaZ4Y0Y' 
                    width='30%'
                    height='300px'
                    playing={false}
                    controls={true}
                />
                <div class="media-body">
                <h3 class="mt-0 mb-1">Zooger</h3>
                <h5 class="mt-0 mb-1">2D video game</h5>
                "Zooger" follows the mechanics of the classic arcade game "Frogger". 
                Although a remake, it has an original theme, additional obstacles and 
                fighting mechanics, and a two player mode that are different from the 
                original arcade game. <br/>
                The game was developed on Unity2D.
                <br/><br/>
                <a href="https://github.com/serenayan/Zooger" class="btn btn-outline-dark btn-md" target="_blank" role="button" aria-disabled="true">GITHUB</a>
                <br/><br/>
                <button type="button" class="btn btn-dark mr-2" disabled>Game Dev</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>C#</button>
                <button type="button" class="btn btn-info mr-2" disabled>Unity2D</button>
                <button type="button" class="btn btn-info" disabled>Photoshop</button>
                </div>
            </li>
            <li class="media my-4">
                <img class="rounded-circle mr-3" src={caltech} alt="Caltech Logo" 
                height='200' width='200' />

                <div class="media-body">
                <h3 class="mt-0 mb-1">Computer Systems</h3>
                <h5 class="mt-0 mb-1">course projects</h5>
                CS 24 is the famous Caltech computer systems course that focuses on hardware-software interface, 
                computer architecture, and operating systems. Specific topics include assembly language, memory allocator,
                garbage collection, performance optimization, parallel programming, semaphore, and virtual memory system.<br/>
                8 personal projects and 2 exams included in source code (final grade: A)
                <br/><br/>
                <a href="https://github.com/serenayan/CS_24_Computer_Systems" class="btn btn-outline-dark btn-md" target="_blank" role="button" aria-disabled="true">GITHUB</a>
                <br/><br/>
                <button type="button" class="btn btn-dark mr-2" disabled>Operating Systems</button>
                <button type="button" class="btn btn-dark mr-2" disabled>Unix</button>
                <button type="button" class="btn btn-secondary mr-2" disabled>C</button>
                
                </div>
            </li>
            </ul>
        );
    }
            
}
export default Project;