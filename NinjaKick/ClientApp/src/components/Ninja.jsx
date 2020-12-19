import React from "react";



const Ninja = props => <div id="Ninja">
    <img className={props.Ninja} src={props.NinjaImage} key={props.NinjaImage} alt=""
        width="100" height="100" />
</div>;

export default Ninja;