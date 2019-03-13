import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard'
import BikerApp from '../BikerApp'
import Login from '../Login'

class Routes extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/parceldetail' exact component={Dashboard} />
          <Route path='/auth/login' exact component={Login} />
          <Route path='/biker' exact component={BikerApp} />
          <Route path='/biker/parceldetail' exact component={BikerApp} />
          
          <Route component={Login} />
        </Switch>
      </div>
    )
  }
}

export default Routes