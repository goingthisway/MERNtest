import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LoginPage from './loginpage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route path='/login' component={Home}/>
    </Switch>
  </main>
)

export default Routes
