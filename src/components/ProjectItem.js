import React from 'react';

export default class ProjectItem extends React.Component {
    render() {
        return (
            <div className="project md:flex">
                <div className="project-thumbnail md:pr-2 md:w-2/5">
                    <img src={this.props.img} alt="" />
                </div>
                <div className="pl-2 md:w-3/5">
                    <div className="project-title">{this.props.name}</div>
                    <div className="project-description">
                        {this.props.children}
                    </div>
                    <div className="project-link"><a href={this.props.link}>Project Link</a></div>
                </div>
            </div>
        );
    }
}