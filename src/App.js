import React, { Component } from 'react';
import './css/App.css';
import './css/bootstrap.min.css'
import Personal from './components/Personal.js'
import Skill from './components/Skill.js'
import Portfolio from './components/Portfolio'
import Header from './components/Header'
import MainPage from './components/MainPage'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'



const person = {
	fullName: '',
	phone:"",
  email:'',
  reEmail: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zip:'',
  hear:'',
	skills: [
		{label: 'swimming', checked: true, id: '123'},
		{label: 'reading', checked: false, id: '535'},
		{label: 'cooking', checked: false, id: '909'},
		{label: 'dancing', checked: false, id: '435'}
	],
	languages: ['English', 'Finnish', 'Arabic', 'French', 'Chinese']
}


class App extends Component {

  constructor(props){
    super(props);

  }

  render() {


    return (
      <div className="App text-center">
      <Router>
          <div>
          <Switch>
            <Route exact  path="/" render={()=><Redirect to='/home'/>}/>
            <Route path="/home" render={({match})=><MainPage
              match={match}
                    />}/>
            <Route path="/404" render={()=><h1 className="notFound">Page not found!</h1>}/>
            <Redirect to ="/404" />
          </Switch>

          </div>
        </Router>
      </div>
);
}
}

export default App;
