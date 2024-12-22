import React from 'react';
import {Tooltip} from "@mui/material";
import classes from './CharacterCard.module.css';

const CharacterCard = ({props}) => {
    return (
        <div className={classes.info}>
            <div className={classes.left}>
                <h2>{props.title}</h2>
                <h3><strong>Роль:</strong> {props.role}</h3>
                <h3><strong>Биография:</strong> {props.bio}</h3>
            </div>
            <div className={classes.right}>
                <div className={classes.sect}>
                    <h3>Навыки:</h3>
                    {props.skills.map((item) => (
                        <Tooltip title={item.description}>
                            <p>{item.name}</p>
                        </Tooltip>
                    ))}
                </div>
                <div className={classes.sect}>
                    <h3>Оружие:</h3>
                    {props.weapons.map((item) => (
                        <Tooltip title={item.description}>
                            <p>{item.name}</p>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;