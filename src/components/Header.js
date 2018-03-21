// @flow
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/App.scss";
import { translate } from "react-i18next";
import type { TFunction } from "react-i18next";
import bootstrap from "../css/bootstrap.min.css";

type Props = {
    i18n: Object,
    t: TFunction
};

class Header extends React.Component<Props> {
    handleChangeLang = e => {
        this.props.i18n.changeLanguage(e.target.value);
    };
    render() {
        const { t } = this.props;

        return (
            <ul className={styles.Nav}>
                <li>
                    <NavLink exact to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/personal/01">
                        {t("nav-personal")}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/skill">{t("nav-skill")}</NavLink>
                </li>
                <li>
                    <NavLink to="/home/portfolio">{t("nav-portfolio")}</NavLink>
                </li>
                <li>
                    <select
                        onChange={e => this.handleChangeLang(e)}
                        className={bootstrap["form-control"]}
                        id="exampleFormControlSelect1"
                    >
                        <option value="en">English</option>
                        <option value="fi">Finnish</option>
                    </select>
                </li>
            </ul>
        );
    }
}

export default translate()(Header);
