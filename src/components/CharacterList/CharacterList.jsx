import React from 'react';
import Character from "../Character/Character.jsx";
import classes from "./CharacterList.module.css";

const CharacterList = ({characters}) => {
    return (
        <div className={classes.characterList}>
            {characters.map((character, index) => (
                <Character
                    key={index}
                    character={character.name}
                    img={character.image}
                    delay={character.delay}
                    percent={character.percent}
                    name={character.name}
                    z={character.z} />
            ))}
        </div>
    );
};

export default CharacterList;