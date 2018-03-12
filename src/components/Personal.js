import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../css/App.scss";
import bootstrap from "../css/bootstrap.min.css";
// Our inner form component which receives our form's state and updater methods as props
import { translate } from "react-i18next";

const validate = values => {
    const errors = {};
    const requiredFields = [
        "fullName",
        "email",
        "reEmail",
        "phone",
        "city",
        "zip",
        "address",
        "country"
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Required";
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (values.reEmail !== values.email) {
        errors.reEmail = "These fields should be matched";
    }
    if (values.fullName && values.fullName.length > 15) {
        errors.fullName = "Must be 15 characters or less";
    }

    return errors;
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <input
            className={error && touched ? "error" : ""}
            {...input}
            placeholder={label}
            type={type}
        />
        {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
);

class PersonalForm extends Component {
    render() {
        const { handleSubmit, pristine, submitting, t } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <section className={styles.personal}>
                    <div className={bootstrap.container}>
                        <h2 className={styles.title}>
                            1. {t("personal.title")}
                        </h2>
                        <div className={bootstrap.row}>
                            <div className={bootstrap["col-md-8"]}>
                                <Field
                                    name="fullName"
                                    component={renderField}
                                    type="text"
                                    label={t("personal.label.fullName")}
                                />
                                <Field
                                    type="text"
                                    name="email"
                                    component={renderField}
                                    label={t("personal.label.email")}
                                />
                                <Field
                                    type="email"
                                    name="reEmail"
                                    label={t("personal.label.reEmail")}
                                    component={renderField}
                                />
                                <div id="feedback" />
                            </div>
                            <div className={bootstrap["col-md-4"]}>
                                <Field
                                    type="text"
                                    name="phone"
                                    label={t("personal.label.phone")}
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-12"]}>
                                <Field
                                    type="text"
                                    name="address"
                                    label={t("personal.label.address")}
                                    component={renderField}
                                />
                            </div>

                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="city"
                                    label={t("personal.label.city")}
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="state"
                                    label={t("personal.label.state")}
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="country"
                                    label={t("personal.label.country")}
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="zip"
                                    label={t("personal.label.zip")}
                                    component={renderField}
                                />
                            </div>

                            <div className={bootstrap["col-md-12"]}>
                                <Field
                                    type="text"
                                    name="hear"
                                    label={t("personal.label.hear")}
                                    component={renderField}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={bootstrap.row}>
                        <div className={bootstrap["col-md-12"]} />
                    </div>

                    <button
                        disabled={pristine || submitting}
                        type="submit"
                        className={`${bootstrap.submit} ${
                            bootstrap["text-left"]
                        } ${bootstrap.btn} ${bootstrap["btn-primary"]}`}
                    >
                        {t("submit")}
                    </button>
                </section>
            </form>
        );
    }
}

export default translate()(
    reduxForm({
        form: "personal",
        validate
    })(PersonalForm)
);
