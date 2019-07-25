import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import User from './User'
import Language from './Language'
import Licences from './Licences'
import Home from './Home'

import './App.css'
import $ from 'jquery'

class App extends Component {
  closeNavDropdown () {
    var nav = $('.navbar-collapse')
    nav.on('click', 'a:not([data-toggle])', null, function () {
      nav.collapse('hide')
    })
  }
  render () {
    return (
      <Router>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls='navbar' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div id='navbar' className='navbar-collapse collapse' aria-expanded='true' onClick={this.closeNavDropdown}>
            <ul className='mx-md-auto'>
              <li><NavLink activeClassName='active' to='/User' className='nav-item nav-link'>User</NavLink></li>
              <li><NavLink activeClassName='active' to='/Language' className='nav-item nav-link'>Language</NavLink></li>
              <li><NavLink activeClassName='active' to='/Licences' className='nav-item nav-link'>Licences</NavLink></li>
            </ul>
          </div>
        </nav>
        <Route exact={true}  path='/' component={Home} />
        <Route path='/User' component={User} />
        <Route path='/Language' component={Language} />
        <Route path='/Licences' component={Licences} />
      </Router>
    )
  }
}

export default App
