// @flow
import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../css/App.scss";
import bootstrap from "../css/bootstrap.min.css";
import { translate } from "react-i18next";
import type { TFunction } from "react-i18next";

class Portfolio extends React.Component<TFunction> {
    render() {
        const { t } = this.props;
        return (
            <form className="" method="post">
                <section className={styles["portfolio"]}>
                    <div className={bootstrap["container"]}>
                        <h2 className={styles["title"]}>
                            3. {t("portfolio.title")}
                        </h2>
                        <p className={bootstrap["text-left"]}>
                            {t("portfolio.prove")}
                        </p>
                        <Field
                            type="link"
                            className="port"
                            placeholder={t("portfolio.link")}
                            name="link"
                            component="input"
                        />
                        <Field
                            name="comment"
                            cols="15"
                            rows="5"
                            placeholder={t("portfolio.text-area")}
                            component="textarea"
                        />
                        <button
                            className={`${bootstrap.submit} ${
                                bootstrap["text-left"]
                            } ${bootstrap.btn} ${bootstrap["btn-primary"]}`}
                        >
                            {t("submit")}
                        </button>
                    </div>
                </section>
            </form>
        );
    }
}

export default translate()(reduxForm({ form: "porfolio" })(Portfolio));
