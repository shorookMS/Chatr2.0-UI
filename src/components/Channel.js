import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "./Message";
import MessageForm from "./MessageForm";
// Actions
import * as actionCreators from "../store/actions";

class Channel extends Component {
  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelID);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.messages === this.props.messages)
      this.props.fetchMessages(this.props.match.params.channelID);
  }
  render() {
    const messageList = this.props.messages.map(msg => (
      <Message key={msg.id} message={msg} />
    ));
    return (
      <div>
        <h1>Messages</h1>
        {messageList}
        <MessageForm channelID={this.props.match.params.channelID} />
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
