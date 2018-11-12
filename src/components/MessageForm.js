import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.post_message(this.props.channelID, this.state);
  }
  render() {
    return (
      <div className="card mx-auto p-0 mt-5">
        <div className="card-body">
          <form onSubmit={this.submitHandler} noValidate>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Message..."
                name="message"
                required
                onChange={this.changeHandler}
              />
            </div>

            <input className="btn btn-primary" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.rootAuth.user
});

const mapDispatchToProps = dispatch => ({
  post_message: (channelID, message) =>
    dispatch(actionCreators.post_message(channelID, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
