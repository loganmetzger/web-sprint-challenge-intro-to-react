// Write your Character component here
import React, { useState, useEffect} from 'react';

const Character = function(props) {

    const { characters } = props;

    console.log(characters)

    return (
       <h2>{props.name}</h2> 
    )

}

export default Character;