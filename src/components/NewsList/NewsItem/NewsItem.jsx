import React from 'react';
import classes from './NewsItem.module.css';
import {useNavigate} from "react-router";

const NewsItem = ({props}) => {

    const navigate = useNavigate();

    return (
        <div className={classes.NewsItem}>
             <div className={classes.Offer}>
                 <h2>{props.name}</h2>
                 <h3>{props.meaning}</h3>
                 <a onClick={() => navigate(`/news/${props.id}`)}>Подробнее</a>
             </div>
            <img src={props.image} alt=""/>
        </div>
    );
};

export default NewsItem;

