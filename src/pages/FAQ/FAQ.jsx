import classes from "../FAQ/FAQ.module.css";
import React from "react";
import GmList from "../../components/GMList/GMList.jsx";

const Faq = () => {
    return (
        <div className={classes.container}>
            <main className="main">
                <div className={classes.container}>
                    <h1>C ЧЕГО НАЧАТЬ?</h1>
                    <h5>LAYKA — это динамичный командный шутер с упором на стратегию и уникальные способности
                        персонажей. Действие происходит в мире постапокалипсиса, где игроки объединяются в команды,
                        чтобы сражаться за ресурсы, технологии и выживание.</h5>
                </div>
            </main>

            <GmList/>
        </div>
    );
};

export default Faq;