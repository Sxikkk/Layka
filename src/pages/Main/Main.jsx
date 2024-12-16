import AnimatedWeapon from "../../components/AnimatedWeapon/AnimatedWeapon.jsx";
import classes from "./Main.module.css"
import {Button} from "@mui/material";
import NewsList from "../../components/NewsList/NewsList.jsx";

const Main = () => {

    return (
        <>
            <div className={classes.container}>
                <div className={classes.offer}>
                    <h1>Тактика хаоса</h1>
                    <p>НАУЧИСЬ КОНТРОЛИРОВАТЬ ХАОС</p>
                    <Button variant='contained' size="large">Играть</Button>
                </div>
                <AnimatedWeapon/>
            </div>
            <NewsList/>
        </>
    );
};

export default Main;