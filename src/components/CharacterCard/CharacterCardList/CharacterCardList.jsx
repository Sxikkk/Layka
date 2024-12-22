import React from 'react';
import CharacterCard from "../CharacterCard.jsx";
import classes from './CharacterCardList.module.css'

const CharacterCardList = ({props}) => {
    return (
        <div className={classes.characterCardList}>
            <div className={classes.characterCardListContainer}>
                {props.map((item, index) => (
                    <CharacterCard props={item} />
                ))}
            </div>
        </div>
    );
};

export default CharacterCardList;