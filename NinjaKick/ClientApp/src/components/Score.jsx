import React from "react";



const Score = props => <React.Fragment>
    { (props.IsDead)?
     <p className="message">Your Lost! press any key</p>:null
    }
    <div className="score">
        <h2>Score:{props.Score}</h2>
        <span>High Score:{props.HighScore} </span>
        <br></br>
        <span>Level:{props.Level} </span>
    </div>
</React.Fragment>;

export default Score;