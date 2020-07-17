import React, { useState} from 'react';
import Character from './Character'
import { Container } from './Styles'

const CharacterList = function(props) {

    const { characters } = props;
    console.log(characters)

    // console.log(characters.map(character => {character}))

    return (
        <Container>
            {
                characters.map((character) => {
                    return(
                        <Character character={character} />
                    )
                })
            }
        </Container>

    )
}

export default CharacterList;