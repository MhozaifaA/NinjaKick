import React, { Component } from 'react';

export class AudioButton extends Component {

    render() {
        return (<button type="button" onClick={() => this.props.onClickAudio(!this.props.state)} className="btn btn-default circleAudio"><span>{this.props.state ? "🔊" : "🔈"}</span></button>);
    }
}



