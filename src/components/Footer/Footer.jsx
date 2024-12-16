import City from "../../assets/images/city.png"
import Logo from "../../assets/logo.jsx";
import {Link} from "react-router";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <img src={City} alt="city" style={{mixBlendMode: 'multiply'}}/>
                <div className={classes.logoContainer}>
                    <Link to='/'><Logo/></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;