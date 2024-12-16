import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import {routes} from "../../routes/index.js";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="burger-menu">
            <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {routes.map((route) => (
                        <li key={route.path}><Link key={route.path} to={route.path} onClick={closeMenu}>{route.name}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;