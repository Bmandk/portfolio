import React from 'react';


export class Container extends React.Component {
    render() {
        return (
            <div className={"container " + this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export class Content extends React.Component {
    render() {
        return (
            <div className={"container content " + this.props.className}>
                {this.props.children}
            </div>
        )
    }
}