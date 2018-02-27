import React, { Component } from "react";
import validator from "validator";
import { Field, reduxForm } from "redux-form";

// Our inner form component which receives our form's state and updater methods as props

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = "Required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.reEmail) {
    errors.reEmail = "Required";
  } else if (values.reEmail !== values.email) {
    errors.reEmail = "These fields should be matched";
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
      className={error && touched ? "error" : " "}
      {...input}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class PersonalForm extends Component {
  render() {
    console.log("this.props: ", this.props);

    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <section className="personal">
          <div className="container">
            <h2 className="title">1.Personal information</h2>
            <div className="row">
              <div className="col-md-8">
                <Field
                  name="fullName"
                  component={renderField}
                  type="text"
                  label="Full name*"
                />
                <Field
                  type="text"
                  name="email"
                  component="input"
                  label="Email*"
                  component={renderField}
                />
                <Field
                  type="email"
                  name="reEmail"
                  label="Re-enter email*"
                  component={renderField}
                />
                <div id="feedback" />
              </div>
              <div className="col-md-4">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Enter like this 046541192"
                  component="input"
                />
              </div>
              <div className="col-md-12">
                <Field
                  type="text"
                  name="address"
                  placeholder="Address*"
                  component="input"
                />
              </div>

              <div className="col-md-3">
                <Field
                  type="text"
                  name="city"
                  placeholder="City*"
                  component="input"
                />
              </div>
              <div className="col-md-3">
                <Field
                  type="text"
                  name="state"
                  placeholder="State"
                  component="input"
                />
              </div>
              <div className="col-md-3">
                <Field
                  type="text"
                  name="country"
                  placeholder="Country/Region*"
                  component="input"
                />
              </div>
              <div className="col-md-3">
                <Field
                  type="text"
                  name="zip"
                  placeholder="Zip/Postal code"
                  component="input"
                />
              </div>

              <div className="col-md-12">
                <Field
                  type="text"
                  name="hear"
                  component="input"
                  placeholder="How did you hear about us"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>

          <button
            disabled={pristine || submitting}
            type="submit"
            className=" text-left submit btn btn-primary "
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
