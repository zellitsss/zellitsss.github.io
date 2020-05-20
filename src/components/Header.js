import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <section id="ze-header">
                <div className="h-screen text-center text-white flex items-center">
                    <div className="flex-1 px-4">
                        <h1 className="text-6xl">
                            Hello! <span className="font-bold text-teal-500">I'm Lâm</span>
                        </h1>

                        <div className="mt-4 text-xl">I also use <span className="font-bold text-teal-500">Zellitsss</span> as username/nickname</div>
                        <div className="font-bold text-xl"><span className="px-2">#gameaholic</span><span className="px-2">#programmer</span></div>
                    </div>
                </div>
            </section>
        );
    }
}