import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import Channel from "./components/Channel";

class App extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <PrivateRoute path="/private" component={SuperSecretPage} />
          <PrivateRoute path="/channels/:channelID" component={Channel} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
