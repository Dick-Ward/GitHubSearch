import React, { Component } from 'react';
import Search from './containers/Search'
import UserContainer from './containers/UserContainer'


class App extends Component {

  state = {
    currentUser: null,
    error: false
  }

handleErrors = (response) => {
      if (!response.ok) {
          this.setState({
            currentUser: null,
            error:true
          })
          throw Error(response.statusText);
      }
      return response;
  }

  fetchUser = (username) =>{
    fetch(`https://api.github.com/users/${username}`)
    .then(this.handleErrors)
    .then(res => res.json())
    .then(user => this.setState({
      currentUser: user,
      error: false
    }))
    .catch(error => console.log(error))
  }

  render() {
    return (
    <div>
      <h1 className="title">The Hub Hub</h1>
      <Search fetchUser={this.fetchUser}/>
      {this.state.currentUser && <UserContainer user={this.state.currentUser}/>}
      {this.state.error && <p>Username Not Found</p>}
    </div>
    )
  }
}

export default App;
