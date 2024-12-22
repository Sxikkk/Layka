import React from 'react';
import NewsItem from "./NewsItem/NewsItem.jsx";
import classes from "./NewsList.module.css";
import Image from "../../assets/images/news.png"
import {Link, useParams} from "react-router";

const NewsList = ({isPage, children}) => {


    const Items = [
        {name: '“КИБЕРИНТЕГРАЦИЯ”', meaning: 'НОВЫЙ РЕЖИМ', id: 1, image: Image, color: 'blue'},
        {name: '“КИfasИЯ”', meaning: 'Н12ЖИМ', id: 2, image: Image, color: "red"},
        {name: '“КadgИЯ”', meaning: 'НasgdМ', id: 3, image: Image, color: 'yellow'},
    ]

    return (
        <div className={classes.NewsList}>

            <div className={classes.top}>
                {children}
                {isPage ? <Link to='/news'>перейти на страницу с новостями</Link> : null}
            </div>
            {Items.map((item) => (
                <NewsItem key={item.id} props={item} />
            ))}
        </div>
    );
};

export default NewsList;