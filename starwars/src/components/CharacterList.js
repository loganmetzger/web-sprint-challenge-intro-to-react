import React, { useState} from 'react';
import Character from './Character'


const CharacterList = function(props) {

    const { characters } = props;
    console.log(characters)

    // console.log(characters.map(character => {character}))

    return (
        <div>
            {
                characters.map((character) => {
                    return(
                        <Character character={character} />
                    )
                })
            }
        </div>

    )
}

export default CharacterList;