import React, { Component } from 'react';

export class AudioButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<button type="button" onClick={() => this.props.onClickAudio(!this.props.Audio)} className="btn btn-default circleAudio"><span>{this.props.Audio ? "🔊" : "🔈"}</span></button>);
    }
}



