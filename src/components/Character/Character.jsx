import React from 'react';
import classes from "./Character.module.css"

const Character = ({name, img, delay, percent, z}) => {
    return (
            <div className={classes.Character}
                 style={{
                     animationDelay: `${delay}s forwards appearance`,
                     transform: `translateX(${percent}%)`,
                     zIndex: z
                 }}
            >
                <img src={img} className={classes.img} alt=""/>
                <h6 className={classes.name}>{name}</h6>
            </div>
    );
};

export default Character;