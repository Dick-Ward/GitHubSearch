import React from 'react'

class RepoList extends React.Component{
  state = {
    repoList: []
  }
  render(){


    const repoList = this.state.repoList.map(repo =>{
      return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
    })

    return(
      <div>
        Most Recently Updated Repos
        {repoList.slice(0, 10)}
      </div>
    )
  }
  componentDidMount(){
    fetch(`${this.props.user.repos_url}?sort=updated&direction=desc`)
    .then(res => res.json())
    .then(list => this.setState({
      repoList: list
    }))
  }
}

export default RepoList
