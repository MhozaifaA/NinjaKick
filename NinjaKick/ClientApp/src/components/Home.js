import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <ul>
          <li>NinjaKick Game, It's a fun game build with React js</li>
          <li> <a href='/NinjaKick'>Start Play</a> </li>
          <li>Check source code on <a href='https://github.com/MhozaifaA/NinjaKick/tree/master/NinjaKick/ClientApp/src'>GitHub</a></li>
        </ul>
      </div>
    );
  }
}
