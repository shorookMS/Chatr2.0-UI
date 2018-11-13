import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "./Message";
import MessageForm from "./MessageForm";
// Actions
import * as actionCreators from "../store/actions";

class Channel extends Component {
  componentDidMount() {
    if (this.props.match.params.channelID)
      this.props.fetchMessages(this.props.match.params.channelID);
  }
  componentDidUpdate(prevProps) {
    this.props.fetchMessages(this.props.match.params.channelID);
  }
  render() {
    let messageList = [];
    if (this.props.match.params.channelID)
      messageList = this.props.messages.map(msg => (
        <Message key={msg.id + msg.username} message={msg} />
      ));
    return (
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div
          className="container p-3  "
          style={{ overflowY: "auto", width: "auto", height: "600px" }}
        >
          {messageList}
        </div>
        {this.props.match.params.channelID && (
          <MessageForm channelID={this.props.match.params.channelID} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.rootMessages.messages
});

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: channelID =>
      dispatch(actionCreators.fetch_messages(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
