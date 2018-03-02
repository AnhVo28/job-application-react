import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../css/App.scss";
import bootstrap from "../css/bootstrap.min.css";

class Portfolio extends React.Component {
    render() {
        return (
            <form class="" method="post">
                <section class={styles["portfolio"]}>
                    <div class={bootstrap["container"]}>
                        <h2 class={styles["title"]}>3. Portfolio</h2>
                        <p class={bootstrap["text-left"]}>
                            Prove you're IBM's next great designer by showing us
                            who you are. What you've have done. How you think.
                            Tell us your story.
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
                        <button
                            className={`${bootstrap.submit} ${
                                bootstrap["text-left"]
                            } ${bootstrap.btn} ${bootstrap["btn-primary"]}`}
                        >
                            Submit
                        </button>
                    </div>
                </section>
            </form>
        );
    }
}

export default reduxForm({ form: "porfolio" })(Portfolio);
