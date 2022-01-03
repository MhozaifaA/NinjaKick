import React, { Component } from 'react';
import './Timer.css';
export class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            life: this.props.life,
        }
    }

    interval = null;

    init() {
        this.setState({ life: 100 });
        this.start();
    }

    start() {
        this.interval = setInterval(() => {
          this.setState({ life: this.state.life-1 });
            if (this.state.life === 0) {
                this.stop();
                this.props.onFinish();
            }
        }, 100); //you can use local var for keep first init life
    }

    stop() {
        clearInterval(this.interval);
    }

    plus(value) {
        this.setState({ life: (this.state.life + value)<100?this.state.life + value:100 });
    }

    componentDidMount() {
        this.props.onRef(this)
        this.start();
    }

    componentWillUnmount() {
        this.props.onRef(this)
        this.stop();
    }




    render() {
        return (<progress max="100" value={this.state.life} className="timer" style={{
            position: "absolute", zIndex: 9999, textAlign: "center", width: 240,
            left: "35%", right: 0, margin:"auto"
        }} >
        </progress>);
    }

 

}


Timer.defaultProps  = {
    life: 100
};