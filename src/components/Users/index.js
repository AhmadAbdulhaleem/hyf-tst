import React, { Component } from 'react';
import User from './user.js';

import './style.css';

class AllUsers extends Component {
  state = {
    allUsers: [],
    user: [],
  };

  fetchAllData = () => {
    fetch('http://uinames.com/api/?ext&amount=5')
      .then(res => res.json())
      .then(allUsers => this.setState({ allUsers }));
  };

  handleSingleUserData = user => {
    const userValue = user;
    const filteredData = this.state.allUsers.find(user => user.name === userValue);
    this.setState({ user: filteredData });
  };

  handleUserData = () => {
    return (
      <div className="wrapper">
        <div className="all-user-data">
          {this.state.allUsers.length > 0
            ? this.state.allUsers.map((user, i) => (
                <ul key={i}>
                  <li>
                    <a href="#" onClick={e => this.handleSingleUserData(user.name)}>
                      {user.name}
                    </a>
                  </li>
                </ul>
              ))
            : null}
        </div>
        <div>{this.state.user ? <User userData={this.state.user} /> : null}</div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="button">
          <button type="submit" onClick={this.fetchAllData}>
            get users
          </button>
        </div>
        {this.handleUserData()}
      </div>
    );
  }
}

export default AllUsers;
