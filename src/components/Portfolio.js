import React from 'react'
import PropTypes from 'prop-types'


class Portfolio extends React.Component {
  render () {
    return(
      <form class="" method="post">

        <section class="portfolio">
          <div class="container">

            <h2 class="title">3. Portfolio</h2>
            <p class="text-left">Prove you're IBM's next great designer by showing us who you are. What you've have done. How you think. Tell us your story.</p>
            <input type="link" class="port" placeholder="Portfolio link*" required/>
            <textarea name="" id="" cols="15" rows="5" placeholder="Anything else (another link, availability, etc.)"></textarea>
            <button class=" text-left submit btn btn-primary ">Submit</button>
          </div>
        </section>
      </form>

    )
  }
}

export default Portfolio;
