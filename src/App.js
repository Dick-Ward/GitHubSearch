import React, { Component } from 'react';
import Search from './containers/Search'
import UserContainer from './containers/UserContainer'


class App extends Component {

  state = {
    currentUser: null
  }

  fetchUser = (username) =>{
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(user => this.setState({
      currentUser: user
    }))
  }

  render() {
    return (
    <div>
      <h1>The Hub Hub</h1>
      <Search fetchUser={this.fetchUser}/>
      {this.state.currentUser && <UserContainer user={this.state.currentUser}/>}
    </div>
    )
  }
}

export default App;
