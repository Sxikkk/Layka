import React from 'react';
import Bomb from './images/image 8.png'
import Camp from './images/image.png'
import Boiler from './images/image-1.png'
import Container from './images/image 9.png'
import classes from "./GMList.module.css";
import GameModeCard from "./GameModeCard.jsx";

const GmList = () => {

    const content = [
        {name: 'Захват точек', description: 'Команды борются за контроль над ключевыми точками на карте', img: Bomb},
        {name: 'Escort', description: 'Одна команда сопровождает груз, в то время как другая пытается его остановить', img: Container},
        {name: 'Выживание', description: 'Последний игрок или команда, оставшиеся в живых, побеждают', img: Camp},
        {name: 'Саботаж', description: 'Игроки выполняют или предотвращают установку взрывных устройств на критически важных объектах', img: Boiler},
    ]

    return (
        <div className={classes.List}>
            <main className="main">
                <h1>Режимы игры:</h1>
                {content.map((item) => (
                    <GameModeCard props={item} />
                ))}
            </main>

        </div>
    );
};

export default GmList;