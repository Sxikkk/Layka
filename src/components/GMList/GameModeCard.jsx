import React from 'react';
import classes from './GameModeCard.module.css';

const GameModeCard = ({props}) => {
    return (
        <div className={classes.GameModeCard}>
            <hr/>
            <div className={classes.all}>
                <div className={classes.content}>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <img src={props.img} alt={props.name}/>
            </div>
        </div>
    );
};

export default GameModeCard;