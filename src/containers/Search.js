import React from 'react'
import {Button, Form} from 'semantic-ui-react'

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
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
          </Form.Field>
          <Form.Field>
            <Button>Search</Button>
          </Form.Field>
          </Form>
        </React.Fragment>
        )
  }
}

export default Search
