import React from 'react';
import NewsItem from "./NewsItem/NewsItem.jsx";
import Image from "../../assets/images/news.png"
import {useParams} from "react-router";

const NewsList = () => {


    const Items = [
        {name: '“КИБЕРИНТЕГРАЦИЯ”', meaning: 'НОВЫЙ РЕЖИМ', id: 1, image: Image},
        {name: '“КИfasИЯ”', meaning: 'Н12ЖИМ', id: 2, image: Image},
        {name: '“КadgИЯ”', meaning: 'НasgdМ', id: 3, image: Image}
    ]

    return (
        <div>
            {Items.map((item) => (
                <NewsItem key={item.id} props={item} />
            ))}
        </div>
    );
};

export default NewsList;