import * as React from 'react';
// import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainPage from '../components/MainPage';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state: any) => {
  return {
    'searchField': state.searchRobots.searchField,
    'robots': state.requestRobots.robots,
    'isPending': state.requestRobots.isPending,
    'error': state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    'onSearchChange': (event: any) => { dispatch(setSearchField(event.target.value)); },
    'onRequestRobots': () => { return dispatch(requestRobots()); }
  };
};

class App extends React.Component {
  render() {
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
