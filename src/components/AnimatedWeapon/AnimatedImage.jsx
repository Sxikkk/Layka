import Line from './images/line.png'
import classes from "./AnimatedImage.module.css";

const AnimatedImage = ({reverse, image}) => {

    return (
        <div className={classes.Animated}
            style={reverse? {transform: 'scale(-1, 1)'} : {transform: 'scale(1, 1)'}}
        >
            <img src={image} className={classes.weapon}/>
            <img src={Line} className={classes.line1}/>
            <img src={Line} className={classes.line2}/>
        </div>
    );
};

export default AnimatedImage;