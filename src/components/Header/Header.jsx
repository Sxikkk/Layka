import {routes} from "../../routes/index.js";
import {Link} from "react-router";
import Logo from "../../assets/logo.jsx";
import classes from "./Header.module.css";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to='/'><Logo /></Link>
                {routes.map(route => (
                    <Link key={route.path} to={route.path} className={classes.link}>{route.name}</Link>
                ))}
            </div>
        </header>
    );
};

export default Header;