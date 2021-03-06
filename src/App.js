import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Main/Home/index'
import Blog from './Main/Blog/index'
import Record from './Main/Record/index'
import MessageArea from './Main/MessageArea/index'
import Detail from './Main/Blog/Detail/index'
import Login from './Main/Login/index'
import Personal from './Main/Personal/index'
import NavigationBar from './Components/NavigationBar/index'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/blog" exact component={Blog}></Route>
            <Route path="/record" exact component={Record}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/blog/detail" exact component={Detail}></Route>
            <Route path="/messagearea" exact component={MessageArea}></Route>
            <Route path="/personal" exact component={Personal}></Route>
            <Redirect path="/" to='/home'></Redirect>
          </Switch>
          <NavigationBar/>
        </div>
      </Router>
    )
  }
}

export default App;
