import React, { Component } from 'react';
import Home from './MOVIE';
import Register from './Register/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import { createAction } from './Reducer/Actions';
import { connect } from 'react-redux';
import DetailPhim from './Detail';
// import DanhSachRap from './DanhSachRap';
// import Seat from './seat';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <DanhSachRap /> */}
        <Switch>
          <Route path="/detail/:courseId/:biDanh" component={DetailPhim} />
          <Route path="/dangky" component={Register} />
          <Route path="/dangnhap" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
  _getCredentialsFromLocal = () => {
    const credentialsStr = localStorage.getItem('credentials');
    if (credentialsStr) {
      this.props.dispatch(createAction("fetchCredentials", JSON.parse(credentialsStr)))
    }
  }
  componentDidMount() {
    this._getCredentialsFromLocal()
  }
}

export default connect()(App);
