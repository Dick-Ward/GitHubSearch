import React from 'react'
import UserDisplay from '../components/UserDisplay'

class UserContainer extends React.Component {
  render(){
  
    const {user} = this.props

    return(
      <React.Fragment>
        <UserDisplay user={user}/>
      </React.Fragment>
    )
  }
}

export default UserContainer
