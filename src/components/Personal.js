import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../css/App.scss";
import bootstrap from "../css/bootstrap.min.css";
// Our inner form component which receives our form's state and updater methods as props

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
        console.log("this.props: ", this.props);

        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <section className={styles.personal}>
                    <div className={bootstrap.container}>
                        <h2 className={styles.title}>1.Personal information</h2>
                        <div className={bootstrap.row}>
                            <div className={bootstrap["col-md-8"]}>
                                <Field
                                    name="fullName"
                                    component={renderField}
                                    type="text"
                                    label="Full name*"
                                />
                                <Field
                                    type="text"
                                    name="email"
                                    component={renderField}
                                    label="Email*"
                                />
                                <Field
                                    type="email"
                                    name="reEmail"
                                    label="Re-enter email*"
                                    component={renderField}
                                />
                                <div id="feedback" />
                            </div>
                            <div className={bootstrap["col-md-4"]}>
                                <Field
                                    type="text"
                                    name="phone"
                                    label="Enter like this 046541192"
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-12"]}>
                                <Field
                                    type="text"
                                    name="address"
                                    label="Address*"
                                    component={renderField}
                                />
                            </div>

                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="city"
                                    label="City*"
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="state"
                                    label="State"
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="country"
                                    label="Country/Region*"
                                    component={renderField}
                                />
                            </div>
                            <div className={bootstrap["col-md-3"]}>
                                <Field
                                    type="text"
                                    name="zip"
                                    label="Zip/Postal code"
                                    component={renderField}
                                />
                            </div>

                            <div className={bootstrap["col-md-12"]}>
                                <Field
                                    type="text"
                                    name="hear"
                                    component="input"
                                    label="How did you hear about us"
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
                        className={`${bootstrap.submit} ${bootstrap["text-left"]} ${bootstrap.btn} ${bootstrap["btn-primary"]}`}
                    >
                        Submit
                    </button>
                </section>
            </form>
        );
    }
}

export default reduxForm({
    form: "personal",
    validate
})(PersonalForm);
