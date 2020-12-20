import React from "react";



const Score = props => <React.Fragment>
    { (props.isDead)?
        <p className="message">You Smashed! press key</p>:null
    }
    <div className="score">
        <h2>Score:{props.score}</h2>
        <span>High Score:{props.highScore} </span>
        <br></br>
        <span>Level:{props.level} </span>
    </div>
</React.Fragment>;

export default Score;