import Weapon from './images/weapon.png'
import Line from './images/line.png'
import classes from "./AnimatedWeapon.module.css";

const AnimatedWeapon = () => {
    return (
        <div className={classes.Animated}>
            <img src={Weapon} className={classes.weapon}/>
            <img src={Line} className={classes.line1}/>
            <img src={Line} className={classes.line2}/>
        </div>
    );
};

export default AnimatedWeapon;