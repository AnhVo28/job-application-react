import React from "react";
import PropTypes from "prop-types";
import { withFormik } from "formik";

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  dirty
}) => (
  <form class="" action="index.html" method="post">
    <section class="personal">
      <div class="container">
        <h2 class="title">1.Personal information</h2>
        <div class="row">
          <div class="col-md-8">
            <input
              type="text"
              name="fullName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
              placeholder="Full name*"
            />
            {touched.fullName &&
              errors.fullName && <div>{errors.fullName}</div>}
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email*"
              required
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <input
              type="email"
              name="reEmail"
              value={values.reEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Re-enter email*"
              required
            />
            <div id="feedback" />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter like this 046541192"
              required
            />
            {touched.phone && errors.phone && <div>{errors.phone}</div>}
          </div>
          <div class="col-md-12">
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address*"
              required
            />
            {touched.address && errors.address && <div>{errors.address}</div>}
          </div>

          <div class="col-md-3">
            <input
              type="text"
              name="city"
              placeholder="City*"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.city && errors.city && <div>{errors.city}</div>}
          </div>
          <div class="col-md-3">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.state && errors.state && <div>{errors.state}</div>}
          </div>
          <div class="col-md-3">
            <input
              type="text"
              name="country"
              placeholder="Country/Region*"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>
          <div class="col-md-3">
            <input
              type="text"
              name="zip"
              placeholder="Zip/Postal code"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>

          <div class="col-md-12">
            <input
              type="text"
              name="hear"
              value={values.hear}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="How did you hear about us"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12" />
      </div>

      <button
        type="submit"
        disabled={!dirty || isSubmitting}
        class=" text-left submit btn btn-primary "
      >
        Submit
      </button>
    </section>
  </form>
);

const PersonalForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    fullName: "",
    email: "",
    reEmail: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    hear: ""
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    console.log(values);
  }
})(InnerForm);

export default PersonalForm;
