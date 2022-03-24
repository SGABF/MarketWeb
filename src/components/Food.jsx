import React from "react";

function Food( {name, image} ){
    return (<div>
        <h2>I Like {name}</h2>
        <img src={image}/>
    </div>);
}

export default Food;