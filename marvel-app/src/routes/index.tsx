import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/home'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  )
}