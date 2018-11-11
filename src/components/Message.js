import React, { Component } from "react";

class Message extends Component {
  render() {
    const message = this.props.message;
    return (
      <div className="Buble">
        <h3>
          {message.username} : {message.message}{" "}
        </h3>
      </div>
    );
  }
}

export default Message;
