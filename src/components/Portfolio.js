import React from "react";
import { Field, reduxForm } from "redux-form";

class Portfolio extends React.Component {
    render() {
        return (
            <form class="" method="post">
                <section class="portfolio">
                    <div class="container">
                        <h2 class="title">3. Portfolio</h2>
                        <p class="text-left">
              Prove you're IBM's next great designer by showing us who you are.
              What you've have done. How you think. Tell us your story.
                        </p>
                        <Field
                            type="link"
                            class="port"
                            placeholder="Portfolio link*"
                            name="link"
                            component="input"
                        />
                        <Field
                            name="comment"
                            cols="15"
                            rows="5"
                            placeholder="Anything else (another link, availability, etc.)"
                            component="textarea"
                        />
                        <button class=" text-left submit btn btn-primary ">Submit</button>
                    </div>
                </section>
            </form>
        );
    }
}

export default reduxForm({ form: "porfolio" })(Portfolio);
