import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Dashboard'
import BikerApp from '../BikerApp'
import Login from '../Login'
import { isAuthenticated, isAdminAuthenticated } from "../../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />
      )
    }
  />
)

const AdminPrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdminAuthenticated() ? (
        <Component {...props} />
      ) : (
        isAuthenticated() ? (
          <Redirect to={{ pathname: "/biker", state: { from: props.location } }} />
        ) : (
          <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />
        )
      )
    }
  />
)

class Routes extends Component {


  
  render() {
    return (
      <div>
        <Switch>
          <AdminPrivateRoute path='/' exact component={Dashboard} />
          <AdminPrivateRoute path='/parceldetail/:id' exact component={Dashboard} />
          <Route path='/auth/login' exact component={Login} />
          <PrivateRoute path="/biker" component={BikerApp} />
          {/* <Route path='/biker' exact component={BikerApp} /> */}
          <PrivateRoute path='/biker/parceldetail/:id' exact component={BikerApp} />
          <Route component={Login} />
        </Switch>
      </div>
    )
  }
}

export default Routes