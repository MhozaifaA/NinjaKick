
import React, { Component } from 'react';
import { AudioButton } from './AudioButton';
import Background from './Background';
import Ninja from './Ninja';
import './NinjaKick.css';
import Score from './Score';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
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
                    Level: GetRandomlyLevel(),
                });
            }
        }
    }
    return rocks;
}

function GetRandomlyLevel() {
    const rand = randomIntFromInterval(1, 10);
    switch (rand) {
        case 10:
            return 3;
        case  1||2:
            return 2;
        default: return 1;
    }
}

export class NinjaKick extends Component {
    constructor(props) {
        super(props);

        //this.UpdateStorage=this.UpdateStorage.bind(this);

        this.state = {
            Rocks: RandomRocks(0),
            Ninja: "left",
            NinjaImage:"/ninja.png",
            Score: 0,
            IsDead: false,
            HighScore: 0,
            RockVisible: 5,
            Level: 1,
            Audio: true,
        };
        
    }

   // audio = new Audio(); 

    componentDidMount() {
        const top = localStorage.getItem("top");
        if (top === null) {
            localStorage.setItem("top", 0);
        } else {
            this.setState({ HighScore: top });
        }

        document.addEventListener("keyup", this.onNinjaKeyUp, false);
        document.addEventListener("keydown", this.onNinjaKeyDown, false);
       // this.UpdateStorage();
    }


    componentWillUnmount() {
        document.removeEventListener("keyup", this.onNinjaKeyUp, false);
        document.removeEventListener("keydown", this.onNinjaKeyDown, false);
    }
  

    isBlockPress = false;

    onNinjaKeyUp =async  (press) => {

        if (!this.isBlockPress)
            return;
        this.isBlockPress = false;

        if (press.key !== 'd' && press.key !== 'a')
            return;


        var IsRealDead = false;

        if (this.state.IsDead) {
            IsRealDead = false;
            await this.setState({ Rocks: RandomRocks(0), IsDead: false, Score: 0, NinjaImage: `/ninja.png` });
           // await timeout(100);

            return;
        }


     

        const pressFlaot = press.key === 'd' ? "right" : "left";

        await this.setState({ Ninja: pressFlaot });

        if (this.state.Rocks[0].Float !== pressFlaot) {
            const Rocks = [...this.state.Rocks];
         
            if (--Rocks[0].Level ===0) {
                Rocks.shift();
            }

            const Score = this.state.Score + this.state.Level; 

            await this.setState({ Rocks, Score });

            if (this.state.HighScore < Score) {
                await  this.setState({ HighScore: Score });
                localStorage.setItem("top", this.state.HighScore);
            }


        } else {
      
            await  this.setState({ IsDead: true });
            IsRealDead = true;

            if (this.state.Audio) {
                let audio = new Audio(`/sound${0}.mp3`);
                audio.play();
            }
        }


        if (this.state.Rocks.length === this.state.RockVisible) {
            await this.setState({ Rocks: RandomRocks(this.state.Score + this.state.RockVisible) });
        }


        // reset to stand or day when up

        await this.setState({ NinjaImage: `/ninja${IsRealDead ? 0 : ""}.png`, Level: Math.ceil(this.state.Score / 50) });
        IsRealDead = false;
      //  await timeout(100);


       // await this.setState({ Level: Math.ceil(this.state.Score / 50) });
        //await this.forceUpdate();

    }


    onNinjaKeyDown = async (press) => {
        if (this.isBlockPress)
            return;

        if (press.key !== 'd' && press.key !== 'a')
            return;
        const num = this.state.IsDead ? 0 : randomIntFromInterval(1, 3);
        await this.setState({ NinjaImage: `/ninja${num}.png` }
            //, async ()=> {
            //  //  await timeout(100);
            //}
        );
        if (this.state.Audio) {
        let audio = new Audio(`/sound${num}.mp3`);
        audio.play();
        }

       // await this.forceUpdate();
       // await timeout(100);
        this.isBlockPress = true;
    }

    handelClickAudio = Audio => {
        this.setState({ Audio });
    }
    

    render() {
      //onKeyDown={(e)=>this.changeMove(e)} onKeyUp={(e) => this.RemoveLast(e)}
        return (
            <React.Fragment >

                <Background />

                
                <Score Score={this.state.Score} Level={this.state.Level}
                    HighScore={this.state.HighScore} IsDead={this.state.IsDead} />

                <AudioButton Audio={this.state.Audio} onClickAudio={this.handelClickAudio}/>

                <div className={this.state.IsDead ? "text-center gameborder dead" : "text-center gameborder"} >
                    {this.state.Rocks.slice(0, this.state.RockVisible).reverse().map(rock =>
                        <div key={rock.Key} className={rock.Level === 1 ? "rock" : "rock dual"} k={rock.Key} >
                            {rock.Level === 1 ? null : <span className="level">×{rock.Level}</span>}
                             <div className={rock.Float} ></div>
                        </div>
                    )}

                    <Ninja Ninja={this.state.Ninja} NinjaImage={this.state.NinjaImage} />
                   
                </div>
            </React.Fragment>
        );
    }
}


