
import React, { Component } from 'react';
import './NinjaKick.css';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function RandomRocks(itr) {

    let rangeRocks = [
        [ { Repeat: 3, Float: "non" },{ Repeat: 7, Float: "right" }, { Repeat: 5, Float: "left" }, { Repeat: 3, Float: "right" }],//100
        [{ Repeat: 3, Float: "right" }, { Repeat: 5, Float: "left" }, { Repeat: 7, Float: "right" }],
        [{ Repeat: 2, Float: "right" }, { Repeat: 3, Float: "non" }, { Repeat: 10, Float: "left" }, { Repeat: 2, Float: "right" }],
        [{ Repeat: 2, Float: "right" }, { Repeat: 3, Float: "left" }, { Repeat: 2, Float: "right" }],
        [{ Repeat: 2, Float: "right" }, { Repeat: 3, Float: "non" }, { Repeat: 3, Float: "non" }, { Repeat: 3, Float: "left" }, { Repeat: 5, Float: "right" }],
        [{ Repeat: 9, Float: "right" }, { Repeat: 4, Float: "left" }, { Repeat: 6, Float: "right" }],
        [{ Repeat: 3, Float: "non" },{ Repeat: 2, Float: "right" }, { Repeat: 2, Float: "left" }, { Repeat: 2, Float: "right" }],
        [{ Repeat: 2, Float: "right" }, { Repeat: 2, Float: "left" }, { Repeat: 2, Float: "right" }],
        [{ Repeat: 2, Float: "right" }, { Repeat: 2, Float: "left" }, { Repeat: 2, Float: "right" }, { Repeat: 3, Float: "non" },]]; //700

    let rocks = [];

    let iter = itr;
    for (let i = 0; i < rangeRocks.length; i++) {
        let range = rangeRocks[randomIntFromInterval(1, i + 1) - 1];
        for (let j = 0; j < range.length; j++) {
            for (var k = 0; k < randomIntFromInterval(range[j].Repeat-2, range[j].Repeat); k++) {
                rocks.push({
                    Key: iter++,
                    Float: range[j].Float,
                });
            }
        }
    }
    return rocks;
}

export class NinjaKick extends Component {
    constructor(props) {
        super(props);

        //this.UpdateStorage=this.UpdateStorage.bind(this);

        this.state = {
            Rocks: RandomRocks(0),
            Ninja: "left",
            Score: 0,
            IsDead: false,
            HighScore:0,
        };

       
    }

    componentDidMount() {
        const top = localStorage.getItem("top");
        if (top === null) {
            localStorage.setItem("top", 0);
        } else {
            this.setState({ HighScore: top });
        }
       // this.UpdateStorage();
    }

  


    RemoveLast = (press) => {


        if (this.state.IsDead) {
            this.setState({ Rocks: RandomRocks(0), IsDead: false, Score: 0 });
            return;
        }

        if (press.key != 'd' && press.key != 'a')
            return;



        const pressFlaot = press.key == 'd' ? "right" : "left";

        this.setState({ Ninja: pressFlaot });

        if (this.state.Rocks[0].Float != pressFlaot) {
            const Rocks = [...this.state.Rocks];
            const Score = Rocks.shift().Key + 1;
            this.setState({ Rocks, Score });

            if (this.state.HighScore < Score) {
                this.setState({ HighScore: Score });
                localStorage.setItem("top", this.state.HighScore);
            }


        } else {
      
            console.log("dead");
            this.setState({  IsDead: true });
        }


        if (this.state.Rocks.length === 4) {
            console.log("Hello" + this.state.Rocks.length);
            this.setState({ Rocks: RandomRocks(this.state.Score + 4) });
        }

        

    }


    render() {
        return (
            <React.Fragment>
                <h2>Score :{this.state.Score}{this.state.IsDead ? "  Your Lost! press any key to agin" : ""}</h2>
                <span>Height Score:{this.state.HighScore} </span>
                <div className={this.state.IsDead ? "text-center gameborder dead" : "text-center gameborder" } tabIndex="0" onKeyPress={(e) => this.RemoveLast(e)}>
                    {this.state.Rocks.slice(0, 4).reverse().map(rock =>
                        <div key={rock.Key} className="rock" lol={rock.Key} >
                             <div className={rock.Float} ></div>
                        </div>
                    )}
                    <div id="Ninja">
                        <img className={this.state.Ninja} src="/ninja.png" alt="" width="100" height="100" />
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


