import React from 'react'
import PropTypes from 'prop-types'


class Skill extends React.Component {
  render () {
    return(
      <form   method="post">
        <section class="skill">
          <section class="role">
            <div class="container">
              <h2 class="title">2. Skills and location</h2>
              <p class="text-left">Which is your primary design discipline</p>
              <div class="row">
                <div class="col-md-3">
                  <div class="job-box">
                    <input type="radio" name="design-discipline" id="design-research" value="Design Research" checked />
                    <label for="design-research">Design Research</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="job-box">
                    <input type="radio" name="design-discipline" id="visual-design" value="Visual Design" />
                    <label for="visual-design">Visual Design</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="job-box">
                    <input type="radio" name="design-discipline" id="ux-design" value="UX Design"/>
                    <label for="ux-design">UX Design</label>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="job-box">
                    <input type="radio" name="design-discipline" id="front-end" value="Front End Dev"/>
                    <label for="front-end">Front End Dev</label>
                  </div>
                </div>
                <section class="question">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6 skill text-left">
                        <section class="job-q" id="job-skill">
                          <p>Do you have experience with any other discipline?</p>
                          <div class="q-box">
                            <input type="checkbox" id="c1" value="Visual design" />
                            <label for="c1"> Visual design</label>
                            <span>&#10008;</span>
                            <br/>
                          </div>
                          <div class="q-box">
                            <input type="checkbox" id="c2" value="UX design"/>
                            <label for="c2"> UX design </label>
                            <span>&#10008;</span>
                            <br/>
                          </div>
                          <div class="q-box">
                            <input type="checkbox" id="c3" value="Front-end Development"/>
                            <label for="c3"> Front-end Developlemt  </label>
                            <span>&#10008;</span>
                            <br/>
                          </div>
                        </section>
                        <label for="add">Add more:</label>
                        <input type="text" name="add" id="add" value=""/>
                        <button id="btn-add" class="btn btn-primary" type="button" name="button">Add</button>
                      </div>
                      <div class="col-md-6 job-q text-left">
                        <p>Where are you interested in working?* <span>You must be legally authozied to work without visa sponsorship in the location(s) you choose.</span> </p>
                        <div class="q-box">
                          <input type="checkbox" value="texas" id="texas"/>
                          <label for="texas"> Austin, Texas</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">
                          <input type="checkbox" value="newyork" id="newyork"/>
                          <label for="newyork"> New York, Noew York</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="toronto" id="toronto"/>
                          <label for="toronto"> Toronto, Canada</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="china" id="china"/>
                          <label for="china"> Shanghai, China</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="dublin" id="dublin"/>
                          <label for="dublin"> Dubin, Ireland</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="hursley" id="hursley"/>
                          <label for="hursley"> Hursley, United Kingdom </label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="germany" id="germany"/>
                          <label for="germany"> Boeblingen, Germany</label>
                          <span>&#10008;</span>
                          <br/>
                        </div>
                        <div class="q-box">

                          <input type="checkbox" value="somewhere" id="somewhere"/>
                          <label for="somewhere"> Somewhere else </label>
                          <span>&#10008;</span>
                          <br/>
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

    )
  }
}

export default Skill;
