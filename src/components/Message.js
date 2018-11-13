import React, { Component } from "react";
import { connect } from "react-redux";

class Message extends Component {
  render() {
    let userFormatter = "#3E4E59";
    if (this.props.message.username === this.props.user.username) {
      userFormatter = "#750E0F";
    }
    const message = this.props.message;
    var dateFormat = require("dateformat");

    let userDiv = (
      <div className="container-fluid flaot-right ">
        <div className=" mb-4 flaot-right" style={{ color: "#3E4E59" }}>
          <h4 className="float-right">
            <span
              className="badge badge-pill badge-light  text-uppercase p-2 mr-2 "
              style={{
                background: `${userFormatter}`,
                color: "white"
              }}
            >
              {message.username}
            </span>
          </h4>
          <div className=" mt-1 mr-3 float-right  ">
            <div
              className="card p-3 bg-light border-0"
              style={{ color: "#3E4E59" }}
            >
              <span>{message.message}</span>
            </div>
            <div
              className="badge font-weight-light float-right"
              style={{ color: "#3E4E59" }}
            >
              {dateFormat(message.timestamp, "mmm dd HH:MM")}
            </div>
          </div>
        </div>
        <div className="clearfix">
          <br />{" "}
        </div>
      </div>
    );
    let randDiv = (
      <div className="container-fluid ">
        <div className="row mb-4 " style={{ color: "#3E4E59" }}>
          <h4>
            <span
              className="badge badge-pill badge-light text-uppercase p-2 mr-2 "
              style={{
                background: `${userFormatter}`,
                color: "white"
              }}
            >
              {message.username}
            </span>
          </h4>
          <div className=" mt-1 ml-3   ">
            <div
              className="badge font-weight-light"
              style={{ color: "#3E4E59" }}
            >
              {dateFormat(message.timestamp, "mmm dd HH:MM")}
            </div>
            <div
              className="card p-3 bg-light border-0"
              style={{ color: "#3E4E59" }}
            >
              <span>{message.message}</span>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {this.props.message.username === this.props.user.username
          ? userDiv
          : randDiv}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

export default connect(mapStateToProps)(Message);
