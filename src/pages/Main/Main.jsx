import AnimatedImage from "../../components/AnimatedWeapon/AnimatedImage.jsx";
import classes from "./Main.module.css"
import Weapon from '../../components/AnimatedWeapon/images/weapon.png'
import Pepls from '../../components/AnimatedWeapon/images/pepls.png'
import {Button} from "@mui/material";
import NewsList from "../../components/NewsList/NewsList.jsx";
import {Link, useNavigate} from "react-router";
import React from "react";

const Main = () => {

    const WeaponImageSrc = './images/weapon.png'

    const navigate = useNavigate();

    const handleDownload = () => {
        const fileURL = WeaponImageSrc;
        const fileName = 'GAME.png';
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="main">
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.offer}>
                        <h1>Тактика хаоса</h1>
                        <p>НАУЧИСЬ КОНТРОЛИРОВАТЬ ХАОС</p>
                        <Button variant='contained' size="large" onClick={handleDownload}>Играть</Button>
                    </div>
                    <AnimatedImage image={Weapon} reverse={false}/>
                </div>
                <NewsList isPage={true} children={
                    <h2>Последние новости</h2>
                }/>
                <div className={classes.container}>
                    <AnimatedImage image={Pepls} reverse={true}/>
                    <div className={classes.offer}>
                        <h1>СМОЖЕШЬ
                            ОСИЛИТЬ?</h1>
                        <p>ЭПИЧНЫЕ БИТВЫ 6 НА 6 С РАЗНЫМИ ПЕРСОНАЖАМИ!</p>
                        <Button variant='contained' size="large"
                                onClick={() => navigate('/characters')}>Персонажи</Button>
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.offer}>
                        <h1>С ЧЕГО НАЧАТЬ?</h1>
                        <p>В игре есть внутриигровой гайд, но если остались вопросы переходи в поддержку</p>
                        <Button variant='contained' size="large" onClick={() => navigate('/FAQ')}>Помощь</Button>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Main;