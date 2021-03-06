import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import LoginScreen from "./LoginScreen";
import { Header } from "./common/Header";
import JobsList from "./JobsList";

class AppContainer extends Component {
  render() {
    return (
      <View>
        <Header headerText={"Login"} />
        {/* <LoginScreen {...this.props} />         */}
        <JobsList />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  state => {
    return {};
  },
  mapDispatchToProps
)(AppContainer);
