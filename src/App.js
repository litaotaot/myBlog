import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Main/Home/index'
import Blog from './Main/Blog/index'
import Record from './Main/Record/index'
import NavigationBar from './Components/NavigationBar/index'
import './App.css'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/record" exact component={Record}></Route>
            <Redirect path="/" to='/home'></Redirect>
          </Switch>
          <NavigationBar/>
        </div>
      </Router>
    )
  }
}

export default App;
