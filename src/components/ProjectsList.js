import React from 'react';
import ProjectItem from './ProjectItem';

export default class ProjectsList extends React.Component {
    render() {
        return (
        <section className="section">
            <div className="section-container container">
                <div className="section-header"><span className="text-teal-500">&lt;/&gt;</span> Projects</div>
                <div className="text-center">
                    <ProjectItem
                        name="War Planet Online"
                        img="./images/wpo.jpg"
                        link="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftW2HM">
                        <p>A Real-Time Strategy MMO game that I've worked for almost 2 years at Android porting team.</p>
                        <p>Features that I've been working on:
                            <ul>
                                <li><span className="font-bold">Installer Improvement</span>: game will download extra data instead of download entire data on updating</li>
                                <li><span className="font-bold">Translation Improvement</span>: Multi-language translation for user's messages (using internal API)</li>
                                <li><span className="font-bold">Intergrating FCM</span> for push notification</li>
                                <li><span className="font-bold">Maintaining Automation scripts</span></li>
                                <li>Host of several technical presentations about <strong>Design Patterns</strong>, <strong>Game Services</strong>, <strong>Automation testing</strong>,..</li>
                            </ul>
                        </p>
                    </ProjectItem>
                    <ProjectItem
                        name="Cocos2d Creator Spaceshooter game"
                        img="./images/project-fake-02.jpg"
                        link="https://github.com/zellitsss/cocos2d-creator-spaceshooter">
                        <p>Just a basic Space Shooter game that's built with Cocos2d Creator using JavaScript.</p>
                        <p>Actually, I've made a Spaceshooter game in the Training section to become a Game Developer. It's built with C++, but at this time, some libs are outdated and can not be built with VS 2019. So I decided to make another version.</p>
                        <p>P/s: I'm trying to run it </p>
                    </ProjectItem>

                    <ProjectItem
                        name="Pusher: C++ game"
                        img="./images/project-fake-03.jpg"
                        link="https://github.com/zellitsss/pusher-cpp-basic-game">
                        <p>Also a basic game, but it came with some great features of C++11</p>
                    </ProjectItem>

                    <ProjectItem
                        name="Bug Tracking App (ReactJS/NodeJS/Express)"
                        link="https://github.com/zellitsss/bug-tracking-reactjs"
                        img="./images/bug-tracking.png">
                        <p>Simple Todo-like app</p>
                    </ProjectItem>

                    <ProjectItem
                        name="Socket based Chat app (ReactJS/NodeJS/SocketIO)"
                        link="https://github.com/zellitsss/socket-io-chat"
                        img="./images/socketio-chat.png">
                        <p></p>
                    </ProjectItem>

                    <ProjectItem
                        name="TailwindCSS templates collection (WIP)"
                        link="https://github.com/zellitsss/tailwind-template-collection"
                        img="./images/tailwind-collection.png">
                        <p>Collection of templates created with Tailwindcss</p>
                    </ProjectItem>
                </div>
            </div>
        </section>
        );
    }
}