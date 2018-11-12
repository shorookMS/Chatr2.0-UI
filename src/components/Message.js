import React, { Component } from "react";

class Message extends Component {
  render() {
    const message = this.props.message;
    return (
      <div className="Buble col " style={{ color: "#3E4E59" }}>
        <h3>
          <span
            className="badge badge-pill badge-light p-2 mr-2 "
            style={{ background: "#3E4E59", color: "white" }}
          >
            {message.username}
          </span>
          <div className="badge" style={{ color: "#3E4E59" }}>
            {message.message}
          </div>
        </h3>
      </div>
    );
  }
}

export default Message;
