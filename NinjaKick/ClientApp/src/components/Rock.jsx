import React from "react";



const Rock = props => <div className={props.value.Level === 1 ? "rock" : "rock dual"} k={props.value.Key} >
    {props.value.Level === 1 ? null : <span className="level">×{props.value.Level}</span>}
    <div className={props.value.Float} ></div>
</div>;
export default Rock;