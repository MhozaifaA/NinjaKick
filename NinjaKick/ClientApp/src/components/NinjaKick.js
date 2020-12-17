
import React, { Component } from 'react';
import './NinjaKick.css';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const background = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:rgba(NaN, NaN, NaN, 0);display:block;z-index:1;position:relative"  preserveAspectRatio="xMidYMid" viewbox="0 0 1000 640">
            <g transform = ""><g transform = "translate(-100 144.84882428902935) rotate(0)">
  <animateTransform attributeName = "transform" type = "translate" keyTimes = "0;1" values = "-100 144.84882428902935;1000 144.84882428902935" dur = "66.66666666666667s" repeatCount = "indefinite" begin = "-9.203849971806951s"></animateTransform>
            <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#b0c7a2" transform="scale(0.55)"></path>
</g ><g transform="translate(-100 197.48756453851016) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 197.48756453851016;1000 197.48756453851016" dur="66.66666666666667s" repeatCount="indefinite" begin="-39.73234308606837s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#b0c7a2" transform="scale(0.55)"></path>
</g><g transform="translate(-100 243.6259502988959) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 243.6259502988959;1000 243.6259502988959" dur="66.66666666666667s" repeatCount="indefinite" begin="-39.10507875629747s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#b0c7a2" transform="scale(0.55)"></path>
</g><g transform="translate(-100 424.6783080890006) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 424.6783080890006;1000 424.6783080890006" dur="66.66666666666667s" repeatCount="indefinite" begin="-64.41231407861305s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#b0c7a2" transform="scale(0.55)"></path>
</g><g transform="translate(-100 269.4468715828732) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 269.4468715828732;1000 269.4468715828732" dur="33.333333333333336s" repeatCount="indefinite" begin="-38.38815424229121s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#7aab92" transform="scale(0.7)"></path>
</g><g transform="translate(-100 24.174604488348734) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 24.174604488348734;1000 24.174604488348734" dur="33.333333333333336s" repeatCount="indefinite" begin="-54.17671321592634s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#7aab92" transform="scale(0.7)"></path>
</g><g transform="translate(-100 124.21880953379002) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 124.21880953379002;1000 124.21880953379002" dur="33.333333333333336s" repeatCount="indefinite" begin="-22.903691295281494s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#7aab92" transform="scale(0.7)"></path>
</g><g transform="translate(-100 177.19066805785602) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 177.19066805785602;1000 177.19066805785602" dur="33.333333333333336s" repeatCount="indefinite" begin="-47.40662667639626s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#7aab92" transform="scale(0.7)"></path>
</g><g transform="translate(-100 636.4189914337194) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 636.4189914337194;1000 636.4189914337194" dur="22.222222222222225s" repeatCount="indefinite" begin="-48.942541104205105s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#437f79" transform="scale(0.85)"></path>
</g><g transform="translate(-100 599.6270055877703) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 599.6270055877703;1000 599.6270055877703" dur="22.222222222222225s" repeatCount="indefinite" begin="-25.258303152625334s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#437f79" transform="scale(0.85)"></path>
</g><g transform="translate(-100 420.0151964369755) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 420.0151964369755;1000 420.0151964369755" dur="22.222222222222225s" repeatCount="indefinite" begin="-17.49007334688043s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#437f79" transform="scale(0.85)"></path>
</g><g transform="translate(-100 337.9911240742152) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 337.9911240742152;1000 337.9911240742152" dur="22.222222222222225s" repeatCount="indefinite" begin="-41.791966162985396s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#437f79" transform="scale(0.85)"></path>
</g><g transform="translate(-100 59.11118551090965) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 59.11118551090965;1000 59.11118551090965" dur="16.666666666666668s" repeatCount="indefinite" begin="-24.553412508262234s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#1d5167" transform="scale(1)"></path>
</g><g transform="translate(-100 468.38019093507273) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 468.38019093507273;1000 468.38019093507273" dur="16.666666666666668s" repeatCount="indefinite" begin="-40.980231684425675s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#1d5167" transform="scale(1)"></path>
</g><g transform="translate(-100 0.08803410654266486) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 0.08803410654266486;1000 0.08803410654266486" dur="16.666666666666668s" repeatCount="indefinite" begin="-44.93225681000526s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#1d5167" transform="scale(1)"></path>
</g><g transform="translate(-100 342.88100148927026) rotate(0)">
  <animateTransform attributeName="transform" type="translate" keyTimes="0;1" values="-100 342.88100148927026;1000 342.88100148927026" dur="16.666666666666668s" repeatCount="indefinite" begin="-2.4521639324009303s"></animateTransform>
  <path d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z" fill="#1d5167" transform="scale(1)"></path>
</g></g >
</svg >`;

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
                    Level: randomIntFromInterval(1, 10)>8?2:1,
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
            NinjaImage:"/ninja.png",
            Score: 0,
            IsDead: false,
            HighScore: 0,
            RockVisible: 5,
            Level:1,
        };

       
    }

    componentDidMount() {
        const top = localStorage.getItem("top");
        if (top === null) {
            localStorage.setItem("top", 0);
        } else {
            this.setState({ HighScore: top });
        }

        document.addEventListener("keyup", this.RemoveLast, false);
        document.addEventListener("keydown", this.changeMove, false);
       // this.UpdateStorage();
    }


    componentWillUnmount() {
        document.removeEventListener("keyup", this.RemoveLast, false);
        document.removeEventListener("keydown", this.changeMove, false);
    }
  

    allowAsync = false;

    RemoveLast =async  (press) => {

        if (!this.allowAsync)
            return;
        this.allowAsync = false;

        if (press.key !== 'd' && press.key !== 'a')
            return;


        var IsRealDead = false;

        if (this.state.IsDead) {
            IsRealDead = false;
            await this.setState({ Rocks: RandomRocks(0), IsDead: false, Score: 0, NinjaImage: `/ninja.png` });
            return;
        }


     

        const pressFlaot = press.key === 'd' ? "right" : "left";

        await this.setState({ Ninja: pressFlaot });

        if (this.state.Rocks[0].Float !== pressFlaot) {
            const Rocks = [...this.state.Rocks];

            if (Rocks[0].Level > 1) {
                Rocks[0].Level = 1;
                this.setState({ Rocks});

            } else {
                Rocks.shift();
            }


            const Score = this.state.Score + this.state.Level; //Rocks.shift().Key + 1;
            await  this.setState({ Rocks, Score });

            if (this.state.HighScore < Score) {
                await  this.setState({ HighScore: Score });
                localStorage.setItem("top", this.state.HighScore);
            }


        } else {
      
            await  this.setState({ IsDead: true });
            IsRealDead = true;
        }


        if (this.state.Rocks.length === this.state.RockVisible) {
            await  this.setState({ Rocks: RandomRocks(this.state.Score + 4) });
        }


        // reset to stand or day when up
        await this.setState({ NinjaImage: `/ninja${IsRealDead ? 0 : ""}.png`, Level: Math.ceil(this.state.Score / 50) });
        IsRealDead = false;


       // await this.setState({ Level: Math.ceil(this.state.Score / 50) });
        //await this.forceUpdate();

    }


    changeMove = async (press) => {
        if (this.allowAsync)
            return;

        if (press.key !== 'd' && press.key !== 'a')
            return;
        await this.setState({ NinjaImage: `/ninja${this.state.IsDead ? 0 : randomIntFromInterval(1, 3)}.png` }
            , async ()=> {
               // await timeout(100);
            }); 

       // await this.forceUpdate();
     //   await timeout(100);
        this.allowAsync = true;
    }

    _

    render() {
      //onKeyDown={(e)=>this.changeMove(e)} onKeyUp={(e) => this.RemoveLast(e)}
        return (
            <React.Fragment >

                <div className="background" tabIndex="0"  dangerouslySetInnerHTML={{
                    __html: background
                }}></div>


                <div className="score">
                    <h2>Score:{this.state.Score}{this.state.IsDead ? "  Your Lost! press any key to agin" : ""}</h2>
                    <span>High Score:{this.state.HighScore} </span>
                    <br></br>
                    <span>Level:{this.state.Level} </span>
                </div>


                <div className={this.state.IsDead ? "text-center gameborder dead" : "text-center gameborder"} >
                    {this.state.Rocks.slice(0, this.state.RockVisible).reverse().map(rock =>
                        <div key={rock.Key} className={rock.Level===1?"rock":"rock dual"} k={rock.Key} >
                             <div className={rock.Float} ></div>
                        </div>
                    )}
                    <div id="Ninja">
                        <img className={this.state.Ninja} src={this.state.NinjaImage} alt="" width="100" height="100" />
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


