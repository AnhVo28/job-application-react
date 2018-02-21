import React from "react";
import PropTypes from "prop-types";

class Personal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      fullName: "",
      phone: "",
      email: "",
      reEmail: "",
      address: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      hear: ""
    };
  }

  render() {
    const {
      fullName,
      phone,
      email,
      reEmail,
      address,
      city,
      state,
      country,
      zip,
      hear
    } = this.state;

    return (
      <form class="" action="index.html" method="post">
        <section class="personal">
          <div class="container">
            <h2 class="title">1.Personal information</h2>
            <div class="row">
              <div class="col-md-8">
                <input
                  type="text"
                  name="name"
                  value={fullName}
                  onChange={e => this.setState({ fullName: e.target.value })}
                  placeholder="Full name*"
                  required
                  pattern="^[A-Za-z]{2,}(\s[A-Za-z]+)+$"
                />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="Email*"
                  pattern="^\w+\.?\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                  required
                />
                <div id="feedback" />
                <input
                  type="email"
                  name="re-email"
                  value={reEmail}
                  onChange={e => this.setState({ reEmail: e.target.value })}
                  placeholder="Re-enter email*"
                  required
                />
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={e => this.setState({ phone: e.target.value })}
                  placeholder="Enter like this 046541192"
                  required
                  min="1"
                  max="16"
                  pattern="^(((\+|00)358)|0)\d{9}$"
                />
              </div>
              <div class="col-md-12">
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={e => this.setState({ address: e.target.value })}
                  placeholder="Address*"
                  required
                />
              </div>

              <div class="col-md-3">
                <input
                  type="text"
                  placeholder="City*"
                  value={city}
                  onChange={e => this.setState({ city: e.target.value })}
                  pattern="\b[A-Za-z]{2,}(\s[A-Za-z]+)*\b"
                  required
                />
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={e => this.setState({ state: e.target.value })}
                  pattern="[A-Za-z]{2,}(\s[A-Za-z]+)*"
                />
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  placeholder="Country/Region*"
                  value={country}
                  onChange={e => this.setState({ country: e.target.value })}
                  required
                />
              </div>
              <div class="col-md-3">
                <input
                  type="text"
                  placeholder="Zip/Postal code"
                  value={zip}
                  onChange={e => this.setState({ zip: e.target.value })}
                  required
                  pattern="^\d{5}$"
                />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  name="think"
                  value={hear}
                  onChange={e => this.setState({ hear: e.target.value })}
                  placeholder="How did you hear about us"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12" />
          </div>

          <button class=" text-left submit btn btn-primary ">Submit</button>
        </section>
      </form>
    );
  }
}

export default Personal;
