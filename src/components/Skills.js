import React from 'react';

export default class Skills extends React.Component {
    render() {
        return (
            <section className="section section-reverse">
                <div className="section-container container">
                    <div className="section-header"><span className="text-teal-500">&lt;/&gt;</span> Skills</div>
                    <div>
                        <div className="mt-8">
                            <div className="skill-title">Languagues</div>
                            <div className="tags-list">
                                <span>C++</span>
                                <span>JavaScript</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>PHP</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="skill-title">Engines/Frameworks</div>
                            <div className="tags-list">
                                <span>Cocos2d Creator</span>
                                <span>Node.js</span>
                                <span>Laravel</span>
                                <span>Reactjs</span>
                                <span>Tailwindcss</span>
                                <span>Bootstrap</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="skill-title">Tools</div>
                            <div className="tags-list">
                                <span>Git/GitHub</span>
                                <span>Confluence</span>
                                <span>Photoshop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}