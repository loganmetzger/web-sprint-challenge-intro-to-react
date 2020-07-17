// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledCharacters = styled.div`
    
`

const Character = function(props) {

    const { character } = props;

    console.log(character)

    return (
        <div>
            <h2>{character.name}</h2> 
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </div>

    )

}

export default Character;