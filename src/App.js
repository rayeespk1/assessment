import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Auth from './containers/auth/auth';
import Logout from './containers/auth/logout/logout';
import Home from './containers/home/home';
import Loader from './components/ui/homeLoader/loader';
import './App.css';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.onTryAutoSignup();
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  };

  demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  }
  
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      let routes = (
        <Switch>
          <Route path="/" component={Auth} />
        </Switch>
      );
      if ( this.props.isAuthenticated ) {
        routes = (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/logout" component={Logout} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        );
      }
      return (
        <div>
            {routes}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
