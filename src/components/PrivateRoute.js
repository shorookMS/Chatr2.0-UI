import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? <Component {...props} /> : <Redirect to="/welcome" />
    }
  />
);

const mapStateToProps = state => ({ user: state.rootAuth.user });

export default connect(mapStateToProps)(PrivateRoute);
