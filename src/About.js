import React from 'react';
import { Content } from './Components'

class About extends React.Component {
    render() {
        return (
            <Content className={"about"}>
                <div id="profilepic">
                    <img src="/images/photo.jpg"/>
                </div>
                <div id="profile">
                    <h3>Game Designer</h3>
                    <p>
                        Video games have always been a part of my life. I have been gaming since I was 10 years old. In 2012 I started on
                        GameIT College, where my game development journey started. I learned to write code and focused on
                        programming. I have experience with hardware, with Arduino and Raspberry Pi, and various sensors. This
                        affords me to create custom hardware for the games I make (i.e. Guitar Hero controller). After this,
                        especially when I started at the IT-University of Copenhagen, I got into game design. It was a lot more
                        interesting, as dealing with people was a lot more unpredictable. With my strong background in
                        programming, it places me as a strong core gameplay designer as I'm able to quickly prototype new games.
                        In my future I'd like to get better at graphics and statistics/data analysis to become a better game
                        designer.
                    </p>
                    <p>
                        In my spare time, I play guitar and piano, hang with friends, watch mostly drama movies and series, and
                        enjoy snowboarding when possible.
                    </p>
                    <div id="cv">
                        <a href="CV%20Jonathan%20Hertz%20-%20English.pdf" target="_blank">Download PDF version of my CV here</a>
                        <h5>Jobs</h5>
                        <ul>
                            <li>Teaching Assistant at IT-University of Copenhagen - 2018-</li>
                            <li>Volunteer at Coding Pirates - Teaching kids programming - 2017-2018</li>
                            <li>Board Member of ITU Innovators - 2016-2017</li>
                            <li>Tournement Organizer at ITU LAN - 2016-2017</li>
                            <li>Barista at KU.BE - October 2016-2017</li>
                            <li>Student worker at SDC - 2015-2016</li>
                        </ul>
                        <h5>Education</h5>
                        <ul>
                            <li>MSc. Games, Design, IT-University of Copenhagen - 2019-2021</li>
                            <li>BSc. Digitale Medier og Design, IT-Universitetet - 2016-2019</li>
                            <li>GameIT College, Grenå Higher Technical Exam - 2012-2015</li>
                        </ul>
                        <h5>Competencies</h5>
                        <ul>
                            <li>Procient with programming, specifically C#, JavaScript, Lua and Python</li>
                            <li>Web Design with Bootstrap, jQuery, Node.js</li>
                            <li>Fluent English and Danish speaking and writing</li>
                            <li>Tools: Unity Engine, Microsoft Office, Visual Studio, Photoshop</li>
                            <li>Proficiency with electronics, including Arduino, Tessel 2, Raspberry Pi and various sensors</li>
                            <li>
                                Various design processes, including design thinking, co-design, usertests, concept development,
                                data gathering (surveys, interviews, observations), play design and locative media design
                            </li>
                        </ul>
                    </div>
                </div>
            </Content>
        );
    }
}

export default About;