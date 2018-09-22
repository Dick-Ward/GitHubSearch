import React from 'react'
import UserDisplay from '../components/UserDisplay'
import RepoList from '../components/RepoList'


class UserContainer extends React.Component {
  render(){

    const {user} = this.props

    return(
      <React.Fragment>
        <UserDisplay user={user}/>
        <RepoList user={user}/>
      </React.Fragment>
    )
  }
}

export default UserContainer
