// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components'

const StyledCharacter = styled.div`
    margin: 20px;
    background-color: rgba(23, 17, 17, 0.39);
    width: 300px;
    height: 350px;

    h2 {
        font-size: 2rem;
    }
`

const Character = function(props) {

    const { character } = props;

    console.log(character)

    return (
        <StyledCharacter>
            <h2>{character.name}</h2> 
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </StyledCharacter>

    )

}

export default Character;