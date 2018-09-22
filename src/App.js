import React, { Component } from 'react';
import Search from './containers/Search'
import UserContainer from './containers/UserContainer'


class App extends Component {

  state = {
    currentUser: dick
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
      <UserContainer user={this.state.currentUser}/>
    </div>
    )
  }
}

export default App;

const dick = {
  "login": "Gonzodamus",
  "id": 30528377,
  "node_id": "MDQ6VXNlcjMwNTI4Mzc3",
  "avatar_url": "https://avatars2.githubusercontent.com/u/30528377?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Gonzodamus",
  "html_url": "https://github.com/Gonzodamus",
  "followers_url": "https://api.github.com/users/Gonzodamus/followers",
  "following_url": "https://api.github.com/users/Gonzodamus/following{/other_user}",
  "gists_url": "https://api.github.com/users/Gonzodamus/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Gonzodamus/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Gonzodamus/subscriptions",
  "organizations_url": "https://api.github.com/users/Gonzodamus/orgs",
  "repos_url": "https://api.github.com/users/Gonzodamus/repos",
  "events_url": "https://api.github.com/users/Gonzodamus/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Gonzodamus/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Dick ward",
  "company": "@flatiron-school @wework",
  "blog": "http://www.DickWard.com",
  "location": "New York, NY",
  "email": null,
  "hireable": true,
  "bio": "Full Stack web developer, technical coaching fellow at Flatiron School.",
  "public_repos": 319,
  "public_gists": 0,
  "followers": 13,
  "following": 22,
  "created_at": "2017-07-28T13:13:35Z",
  "updated_at": "2018-09-22T11:44:13Z"
}
