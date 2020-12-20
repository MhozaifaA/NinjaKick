import React from "react";


const Ninja = props => <div id="Ninja">
    <img className={props.state} src={props.image} key={props.image} alt=""
        width="100" height="100" />
</div>;

export default Ninja;