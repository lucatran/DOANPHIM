import React from 'react';
import Home from './MOVIE';
import Register from './Register/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
      <Switch>       
        <Route path="/dangky" component={Register} />
        <Route path="/dangnhap" component={Login} />
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
