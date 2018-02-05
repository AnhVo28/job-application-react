import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Personal from './Personal.js'
import Skill from './Skill.js'
import Portfolio from './Portfolio'
import {
  Route,
  Switch
} from 'react-router-dom'


const MainPage = (props)=> {

    return(
      <div>
        <Header/>
        <h1>Let's talk</h1>
        <p>Think you have what it takes? Show us.</p>
        <Switch>
          <Route  path={`${props.match.path}/personal/:id`} render={()=><Personal/>}/>
             <Route  path={`${props.match.path}/skill`} component={Skill}/>
          <Route  path={`${props.match.path}/portfolio`} component={Portfolio}/>
          <Route  path={`${props.match.path}/:id`} render={()=><h1 className="notFound">Page not found!</h1>}/>
        </Switch>
      </div>
    )
  }


export default MainPage;
