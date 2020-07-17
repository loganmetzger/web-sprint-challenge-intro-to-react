import React, { useState} from 'react';
import Character from './Character'


const CharacterList = function(props) {

    const { characters } = props;
    // console.log(characters)

    return (
        <div>
            {
                characters.map(char => {
                    return (
                        <Character characters={characters} />
                    )
                })
            }
        </div>

    )
}

export default CharacterList;