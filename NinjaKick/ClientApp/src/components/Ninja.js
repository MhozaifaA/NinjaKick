//import React from "react";


//const Ninja = props => <div id="Ninja">
//    <img className={props.state} src={props.image} key={props.image} alt=""
//        width="100" height="100" />
//</div>;

//export default Ninja;

import React, { Component } from 'react';

export class Ninja extends Component {

    constructor(props) {
        super(props);


        this.imgNinja = '/ninja.png';
        this.imgNinja0 ='/ninja0.png';
        this.imgNinja1='/ninja1.png';
        this.imgNinja2='/ninja2.png';
        this.imgNinja3='/ninja3.png';


    }

    render() {

        let ninja =  this.props.image !== this.imgNinja;
        let ninja0 = this.props.image !==   this.imgNinja0;
        let ninja1 = this.props.image !==   this.imgNinja1;
        let ninja2 = this.props.image !==   this.imgNinja2;
        let ninja3 = this.props.image !== this.imgNinja3;
        console.log(ninja, ninja0, ninja1, ninja2, ninja3);
        return (<div id="Ninja">

            <img hidden={ninja} className={this.props.state} src={this.imgNinja} key={this.imgNinja} alt=""
                width="100" height="100" />

            <img hidden={ninja0} className={this.props.state} src={this.imgNinja0} key={this.imgNinja0} alt=""
                width="100" height="100" />

            <img hidden={ninja1} className={this.props.state} src={this.imgNinja1} key={this.imgNinja1} alt=""
                width="100" height="100" />

            <img hidden={ninja2} className={this.props.state} src={this.imgNinja2} key={this.imgNinja2} alt=""
                width="100" height="100" />

            <img hidden={ninja3} className={this.props.state} src={this.imgNinja3} key={this.imgNinja3} alt=""
                width="100" height="100" />

        </div>

        );
            }

}