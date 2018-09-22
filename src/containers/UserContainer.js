import React from 'react'
import UserDisplay from '../components/UserDisplay'
import RepoList from '../components/RepoList'
import {Grid} from 'semantic-ui-react'


class UserContainer extends React.Component {
  render(){

    const {user} = this.props

    return(
      <div className="container">
        <Grid>
          <Grid.Column width={1} />
          <Grid.Column width={6}>
            <UserDisplay user={user}/>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={6}>
            <RepoList user={user}/>
          </Grid.Column>

        </Grid>
      </div>
    )
  }
}

export default UserContainer
