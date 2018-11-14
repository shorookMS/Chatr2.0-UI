import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/";

class ChannelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createChannel(this.state, this.props.history);
  }
  render() {
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">Create a channel</h5>
          <form onSubmit={this.submitHandler} noValidate>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Channel Name"
                name="name"
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Image URL"
                name="image_url"
                onChange={this.changeHandler}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createChannel: (channel, history) =>
    dispatch(actionCreators.create_channel(channel, history))
});

export default connect(
  null,
  mapDispatchToProps
)(ChannelForm);
