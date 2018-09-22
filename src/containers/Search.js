import React from 'react'

class Search extends React.Component {

  state = {
    userQuery: ""
  }

  handleChange = (e) =>{
    this.setState({
      userQuery: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.fetchUser(this.state.userQuery)
  }

  render(){
    return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search
            <input
              type="text"
              name="search"
              placeholder="Enter a username to find information about a GitHub User"
              value={this.state.userQuery}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
        </React.Fragment>
        )
  }
}

export default Search
