import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="section-container container">
                    <div className="section-header"><span className="text-teal-500">&lt;/&gt;</span> About me</div>
                    <div className="py-4 max-w-2xl mx-auto text-justify">
                        <p>
                            I'm Lam Le.<br />
                            I'm a Game Developer and Web developer.
                        </p>
                        <p>
                            With 2-years experienced in Game development, I like to continue making some great games, and also facing new challenges in Web development (especially Front-End)
                        </p>
                    </div>
                    <div className="py-4">
                        <a href="#" className="font-bold uppercase bg-teal-500 text-white px-4 py-2 hover:bg-teal-900 transition ease duration-150">Download my CV</a>
                    </div>
                </div>
            </section>
        );
    }
}