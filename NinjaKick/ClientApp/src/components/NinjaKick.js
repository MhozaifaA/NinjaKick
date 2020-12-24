
import React, { Component } from 'react';
import { AudioButton } from './AudioButton';
import Background from './Background';
import { Ninja } from './Ninja';
import './NinjaKick.css';
import Rock from './Rock';
import Score from './Score';
import { Timer } from './Timer';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

var iter = 0;

function RandomRocks(valid) {

  

    var rocks = [];

    for (let i = 0; i < valid; i++) {
        let pack = randomIntFromInterval(2,10);
        let left = randomIntFromInterval( 0, pack);
        let right = pack - left;

        let _non = randomIntFromInterval(0, 10);

        let non = _non <= 3 ? _non : 0;

        for (let j = 0; j < left; j++) {
            rocks.push({
                Key: iter++,
                Float: "left",
                Level: GetRandomlyLevel(),
                Award:"freezing"
            });
        }

        for (let j = 0; j < non; j++) {
            rocks.push({
                Key: iter++,
                Float: "non",
                Level: GetRandomlyLevel(),
            });
        }


        for (let j = 0; j < right; j++) {
            rocks.push({
                Key: iter++,
                Float: "right",
                Level: GetRandomlyLevel(),
            });
        }


    }

    //if (rocks.length < valid+10) {
    //    RandomRocks(valid);
    //}
    console.log(rocks);

    return rocks;
}

function GetRandomlyLevel() {
    const rand = randomIntFromInterval(1, 10);
    switch (rand) {
        case 10:
            return 3;
        case 1 || 2:
            return 2;
        default: return 1;
    }
}

export class NinjaKick extends Component {
    constructor(props) {
        super(props);

        //this.UpdateStorage=this.UpdateStorage.bind(this);

        this.state = {
            Rocks: RandomRocks(5),
            Ninja: "left",
            NinjaImage: "/ninja.png",
            Score: 0,
            IsDead: false,
            HighScore: 0,
            RockVisible: 5,
            Level: 1,
            Audio: true,
        };

        this.keyA = 65;
        this.keyD = 68;
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

        document.addEventListener("mouseup", this.onMouseUpCord, false);
        document.addEventListener("mousedown", this.onMouseDownCord, false);
    }


    componentWillUnmount() {
        document.removeEventListener("keyup", this.onNinjaKeyUp, false);
        document.removeEventListener("keydown", this.onNinjaKeyDown, false);

        document.addEventListener("mouseup", this.onMouseUpCord, false);
        document.addEventListener("mousedown", this.onMouseDownCord, false);
    }

    onMouseUpCord = async (e) => {
        if (window.innerWidth / 2 > e.pageX)
            await this.onNinjaKeyUp({ keyCode: this.keyA });
        else if (window.innerWidth / 2 < e.pageX)
            await this.onNinjaKeyUp({ keyCode: this.keyD });
    }

    onMouseDownCord = async (e) => {
        if (window.innerWidth / 2 > e.pageX)
            await this.onNinjaKeyDown({ keyCode: this.keyD });
        else if (window.innerWidth / 2 < e.pageX)
            await this.onNinjaKeyDown({ keyCode: this.keyA });
    }


    isBlockPress = false;
    IsRealDead = false;

    onNinjaKeyUp = async (press) => {

        if (!this.isBlockPress)
            return;
        this.isBlockPress = false;
        if (press.keyCode !== this.keyD && press.keyCode !== this.keyA)
            return;
        

        this.IsRealDead = false;

        if (this.state.IsDead) {
            this.IsRealDead = false;
            console.log("ded");
            await this.setState({ Rocks: RandomRocks(this.state.RockVisible), IsDead: false, Score: 0, NinjaImage: `/ninja.png` });
            // await timeout(100);
            this.Timer.init();

            return;
        }




        const pressFlaot = press.keyCode === this.keyD ? "right" : "left" ;

        await this.setState({ Ninja: pressFlaot });

        if (this.state.Rocks[0].Float !== pressFlaot || this.state.Rocks[0].Level > 1) {
            const Rocks = [...this.state.Rocks];

            if (--Rocks[0].Level === 0) {
                Rocks.shift();
            // update time 
                this.Timer.plus(3);
            }

            const Score = this.state.Score + this.state.Level;

            await this.setState({ Rocks, Score });

            if (this.state.HighScore < Score) {
                await this.setState({ HighScore: Score });
                localStorage.setItem("top", this.state.HighScore);
            }


        } else {

            await this.setState({ IsDead: true });
            this.IsRealDead = true;

            if (this.state.Audio) {
                let audio = new Audio(`/sound${0}.mp3`);
                audio.play();
            }

            this.Timer.stop();

        }


        if (this.state.Rocks.length <= this.state.RockVisible + 10) {
            await this.setState({ Rocks: [...this.state.Rocks, ...RandomRocks(this.state.RockVisible)]  });
        }


        // reset to stand or day when up

        let level = Math.ceil(this.state.Score / 50);
        await this.setState({ NinjaImage: `/ninja${this.IsRealDead ? 0 : ""}.png`, Level: level === 0? 1:level });
        this.IsRealDead = false;
        //  await timeout(100);


        // await this.setState({ Level: Math.ceil(this.state.Score / 50) });
        //await this.forceUpdate();

    }


    onNinjaKeyDown = async (press) => {
        if (this.isBlockPress)
            return;

        if (press.keyCode !== this.keyD && press.keyCode !== this.keyA)
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


    handelFinish = () => {
       this.setState({ IsDead: true, NinjaImage: `/ninja${0}.png`});
       this.IsRealDead = true;
       if (this.state.Audio) {
           let audio = new Audio(`/sound${0}.mp3`);
           audio.play();
       }
       this.IsRealDead = false;
    }


    render() {
        return (
            <React.Fragment >
                <Timer onFinish={this.handelFinish} onRef={ref => (this.Timer = ref)} life={100} />

                <Background />

                <Score score={this.state.Score} level={this.state.Level}
                    highScore={this.state.HighScore} isDead={this.state.IsDead} />

                <AudioButton state={this.state.Audio} onClickAudio={this.handelClickAudio} />

                <div className={this.state.IsDead ? "text-center gameborder dead" : "text-center gameborder"} >
                    {this.state.Rocks.slice(0, this.state.RockVisible).reverse().map(rock =>
                        <Rock key={rock.Key} value={rock} />
                    )}

                    <Ninja key="ninjakey" state={this.state.Ninja} image={this.state.NinjaImage} />

                </div>
            </React.Fragment>
        );
    }
}


