import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "./PostActions";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardMedia, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card>
          <CardMedia>
            <img
              src="https://images.pexels.com/photos/974091/pexels-photo-974091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </CardMedia>
          <CardText>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Title: </label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                />
              </div>
              <br />
              <div>
                <label>Body: </label>
                <br />
                <textarea
                  name="body"
                  onChange={this.onChange}
                  value={this.state.body}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </CardText>
        </Card>
        <div />
      </MuiThemeProvider>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
