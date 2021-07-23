import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../services/isAuthenticated'

export const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        )
      }
    />
  )
}