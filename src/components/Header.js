import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/App.scss";

const Header = props => {
    return (
        <ul className={styles.Nav}>
            <li>
                <NavLink exact to="/home">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/home/personal/01">Personal information</NavLink>
            </li>
            <li>
                <NavLink to="/home/skill">Skills</NavLink>
            </li>
            <li>
                <NavLink to="/home/portfolio">Portfolio</NavLink>
            </li>
        </ul>
    );
};

export default Header;
