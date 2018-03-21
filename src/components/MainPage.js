// @flow
import React from "react";
import Header from "./Header";
import Personal from "./Personal.js";
import Skill from "./Skill.js";
import Portfolio from "./Portfolio";
import { Route, Switch } from "react-router-dom";
import styles from "../css/App.scss";
import { translate } from "react-i18next";
import type { TFunction } from "react-i18next";

type Props = {
    t: TFunction,
    match: Object
}

const MainPage = (props: Props) => {
    const { t } = props;

    
    return (
        <div>
            <Header />
            <h1>{t("mainPage.talk")}</h1>
            <p>{t("mainPage.think")}</p>
            <Switch>
                <Route
                    path={`${props.match.path}/personal/:id`}
                    render={() => (
                        <Personal
                            onSubmit={values => console.log("values: ", values)}
                        />
                    )}
                />
                <Route path={`${props.match.path}/skill`} component={Skill} />
                <Route
                    path={`${props.match.path}/portfolio`}
                    render={() => <Portfolio />}
                />
                <Route
                    path={`${props.match.path}/:id`}
                    render={() => (
                        <h1 className={styles["notFound"]}>Page not found!</h1>
                    )}
                />
            </Switch>
        </div>
    );
};

export default translate()(MainPage);
