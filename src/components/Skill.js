import React from "react";
import { Field, reduxForm } from "redux-form";

class Skill extends React.Component {
    render() {
        return (
            <form method="post">
                <section class="skill">
                    <section class="role">
                        <div class="container">
                            <h2 class="title">2. Skills and location</h2>
                            <p class="text-left">Which is your primary design discipline</p>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="job-box">
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            value="Design Research"
                                            id="design-research"
                                            component="input"
                                        />
                                        <label htmlFor="design-research">Design Research</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="job-box">
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="visual-design"
                                            value="Visual Design"
                                            component="input"
                                        />
                                        <label htmlFor="visual-design">Visual Design</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="job-box">
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="ux-design"
                                            value="UX Design"
                                            component="input"
                                        />
                                        <label htmlFor="ux-design">UX Design</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="job-box">
                                        <Field
                                            type="radio"
                                            name="design-discipline"
                                            id="front-end"
                                            value="Front End Dev"
                                            component="input"
                                        />
                                        <label htmlFor="front-end">Front End Dev</label>
                                    </div>
                                </div>
                                <section class="question">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 skill text-left">
                                                <section class="job-q" id="job-skill">
                                                    <p>
                            Do you have experience with any other discipline?
                                                    </p>
                                                    <div class="q-box">
                                                        <Field
                                                            name="VisualDesign"
                                                            id="c1"
                                                            label="Visual design"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c1"> Visual design</label>
                                                        <br />
                                                    </div>
                                                    <div class="q-box">
                                                        <Field
                                                            name="UX design"
                                                            type="checkbox"
                                                            id="c2"
                                                            value="UX design"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c2"> UX design </label>
                                                        <br />
                                                    </div>
                                                    <div class="q-box">
                                                        <Field
                                                            name="Front-end Development"
                                                            type="checkbox"
                                                            id="c3"
                                                            value="Front-end Development"
                                                            component="input"
                                                        />
                                                        <label htmlFor="c3"> Front-end Developlemt </label>
                                                        <br />
                                                    </div>
                                                </section>
                                                <label htmlFor="add">Add more:</label>
                                                <Field
                                                    type="text"
                                                    name="add"
                                                    id="add"
                                                    component="input"
                                                />
                                                <button
                                                    id="btn-add"
                                                    class="btn btn-primary"
                                                    type="button"
                                                    name="button"
                                                >
                          Add
                                                </button>
                                            </div>
                                            <div class="col-md-6 job-q text-left">
                                                <p>
                          Where are you interested in working?*{" "}
                                                    <span>
                            You must be legally authozied to work without visa
                            sponsorship in the location(s) you choose.
                                                    </span>
                                                </p>
                                                <div class="q-box">
                                                    <Field
                                                        name="texas"
                                                        type="checkbox"
                                                        value="texas"
                                                        id="texas"
                                                        component="input"
                                                    />
                                                    <label htmlFor="texas"> Austin, Texas</label>
                                                    <br />
                                                </div>
                                                <div class="q-box">
                                                    <Field
                                                        name="newyork"
                                                        type="checkbox"
                                                        value="newyork"
                                                        id="newyork"
                                                        component="input"
                                                    />
                                                    <label htmlFor="newyork"> New York, Noew York</label>
                                                    <br />
                                                </div>
                                                <div class="q-box">
                                                    <Field
                                                        name="toronto"
                                                        type="checkbox"
                                                        value="toronto"
                                                        id="toronto"
                                                        component="input"
                                                    />
                                                    <label htmlFor="toronto"> Toronto, Canada</label>

                                                    <br />
                                                </div>
                                                <div class="q-box">
                                                    <Field
                                                        name="china"
                                                        type="checkbox"
                                                        value="china"
                                                        id="china"
                                                        component="input"
                                                    />
                                                    <label htmlFor="china"> Shanghai, China</label>

                                                    <br />
                                                </div>
                                                <div class="q-box">
                                                    <Field
                                                        name="dublin"
                                                        type="checkbox"
                                                        value="dublin"
                                                        id="dublin"
                                                        component="input"
                                                    />
                                                    <label htmlFor="dublin"> Dubin, Ireland</label>

                                                    <br />
                                                </div>
                                                <div class="q-box">
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
                                                <div class="q-box">
                                                    <Field
                                                        name="germany"
                                                        type="checkbox"
                                                        value="germany"
                                                        id="germany"
                                                        component="input"
                                                    />
                                                    <label htmlFor="germany"> Boeblingen, Germany</label>

                                                    <br />
                                                </div>
                                                <div class="q-box">
                                                    <Field
                                                        name="somewhere"
                                                        type="checkbox"
                                                        value="somewhere"
                                                        id="somewhere"
                                                        component="input"
                                                    />
                                                    <label htmlFor="somewhere"> Somewhere else </label>

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

export default reduxForm({ form: "skill" })(Skill);
