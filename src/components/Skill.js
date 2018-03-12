import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../css/App.scss";
import bootstrap from "../css/bootstrap.min.css";
import { translate } from "react-i18next";

class Skill extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <form method="post">
                <section className={styles.skill}>
                    <section className={styles["role"]}>
                        <div className={bootstrap["container"]}>
                            <h2 className={styles["title"]}>
                                2. {t("skill.title")}
                            </h2>
                            <p className={bootstrap["text-left"]}>
                                {t("skill.design-discipline")}
                            </p>
                            <div className={bootstrap["row"]}>
                                <div className={bootstrap["col-md-3"]}>
                                    <div className={styles["job-box"]}>
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            value="Design Research"
                                            id="design-research"
                                            component="input"
                                        />
                                        <label htmlFor="design-research">
                                            {t("skill.design-research")}
                                        </label>
                                    </div>
                                </div>
                                <div className={bootstrap["col-md-3"]}>
                                    <div className={styles["job-box"]}>
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="visual-design"
                                            value="Visual Design"
                                            component="input"
                                        />
                                        <label htmlFor="visual-design">
                                            {t("skill.visual-design")}
                                        </label>
                                    </div>
                                </div>
                                <div className={bootstrap["col-md-3"]}>
                                    <div className={styles["job-box"]}>
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="ux-design"
                                            value="UX Design"
                                            component="input"
                                        />
                                        <label htmlFor="ux-design">
                                            {t("skill.ux-design")}
                                        </label>
                                    </div>
                                </div>
                                <div className={bootstrap["col-md-3"]}>
                                    <div className={styles["job-box"]}>
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="front-end"
                                            value="Front End Dev"
                                            component="input"
                                        />
                                        <label htmlFor="front-end">
                                            Front End Dev
                                        </label>
                                    </div>
                                </div>
                                <section className={styles["question"]}>
                                    <div className={bootstrap["container"]}>
                                        <div className={bootstrap["row"]}>
                                            <div
                                                className={`${
                                                    bootstrap["col-md-6"]
                                                } ${styles.skill} ${
                                                    bootstrap["text-left"]
                                                }`}
                                            >
                                                <section
                                                    className={styles["job-q"]}
                                                    id="job-skill"
                                                >
                                                    <p>
                                                        {t(
                                                            "skill.other-discipline"
                                                        )}
                                                    </p>
                                                    <div
                                                        className={
                                                            styles["q-box"]
                                                        }
                                                    >
                                                        <Field
                                                            name="VisualDesign"
                                                            id="c1"
                                                            label="Visual design"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c1">
                                                            {" "}
                                                            {t(
                                                                "skill.design-research"
                                                            )}
                                                        </label>
                                                        <br />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles["q-box"]
                                                        }
                                                    >
                                                        <Field
                                                            name="UX design"
                                                            type="checkbox"
                                                            id="c2"
                                                            value="UX design"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c2">
                                                            {" "}
                                                            {t(
                                                                "skill.ux-design"
                                                            )}{" "}
                                                        </label>
                                                        <br />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles["q-box"]
                                                        }
                                                    >
                                                        <Field
                                                            name="Front-end Development"
                                                            type="checkbox"
                                                            id="c3"
                                                            value="Front-end Development"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c3">
                                                            {" "}
                                                            Front-end
                                                            Developlemt{" "}
                                                        </label>
                                                        <br />
                                                    </div>
                                                </section>
                                                <label htmlFor="add">
                                                    {t("skill.more")}
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="add"
                                                    id="add"
                                                    component="input"
                                                />
                                                <button
                                                    id="btn-add"
                                                    className={`${
                                                        bootstrap["btn"]
                                                    } ${
                                                        bootstrap["btn-primary"]
                                                    }`}
                                                    type="button"
                                                    name="button"
                                                >
                                                    {t("add")}
                                                </button>
                                            </div>
                                            <div
                                                className={`${
                                                    bootstrap["col-md-6"]
                                                } ${bootstrap["text-left"]} ${
                                                    styles["job-q"]
                                                }`}
                                            >
                                                <p>
                                                    {t("skill.where-interest")}{" "}
                                                    
                                                </p>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="texas"
                                                        type="checkbox"
                                                        value="texas"
                                                        id="texas"
                                                        component="input"
                                                    />
                                                    <label htmlFor="texas">
                                                        {" "}
                                                        Austin, Texas
                                                    </label>
                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="newyork"
                                                        type="checkbox"
                                                        value="newyork"
                                                        id="newyork"
                                                        component="input"
                                                    />
                                                    <label htmlFor="newyork">
                                                        {" "}
                                                        New York, Noew York
                                                    </label>
                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="toronto"
                                                        type="checkbox"
                                                        value="toronto"
                                                        id="toronto"
                                                        component="input"
                                                    />
                                                    <label htmlFor="toronto">
                                                        {" "}
                                                        Toronto, Canada
                                                    </label>

                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="china"
                                                        type="checkbox"
                                                        value="china"
                                                        id="china"
                                                        component="input"
                                                    />
                                                    <label htmlFor="china">
                                                        {" "}
                                                        Shanghai, China
                                                    </label>

                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="dublin"
                                                        type="checkbox"
                                                        value="dublin"
                                                        id="dublin"
                                                        component="input"
                                                    />
                                                    <label htmlFor="dublin">
                                                        {" "}
                                                        Dubin, Ireland
                                                    </label>

                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="hursley"
                                                        type="checkbox"
                                                        value="hursley"
                                                        id="hursley"
                                                        component="input"
                                                    />
                                                    <label htmlFor="hursley">
                                                        {" "}
                                                        Hursley, United Kingdom{" "}
                                                    </label>

                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="germany"
                                                        type="checkbox"
                                                        value="germany"
                                                        id="germany"
                                                        component="input"
                                                    />
                                                    <label htmlFor="germany">
                                                        {" "}
                                                        Boeblingen, Germany
                                                    </label>

                                                    <br />
                                                </div>
                                                <div
                                                    className={styles["q-box"]}
                                                >
                                                    <Field
                                                        name="somewhere"
                                                        type="checkbox"
                                                        value="somewhere"
                                                        id="somewhere"
                                                        component="input"
                                                    />
                                                    <label htmlFor="somewhere">
                                                        {" "}
                                                        {t("skill.somewhere-else")}{" "}
                                                    </label>

                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
            </form>
        );
    }
}

export default translate()(reduxForm({ form: "skill" })(Skill));
