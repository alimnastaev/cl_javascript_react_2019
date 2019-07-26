import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import UserForm from "./UserForm";

// User Component with external UserForm in render method
class User extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({ repos });
      })
    } else return;
  }
  render() {
    return (
      <div className="subform">
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: { this.state.repos }</p> : <p>Please type a username</p> }
      </div>
    );
  }
};

export default User;
