import React from 'react'

const UserDisplay = ({user}) =>{


  return(
    <div>
      <img className="avatar" src={user.avatar_url} alt={user.name}/>
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <ul>
        {user.email && <li>Email: {user.email}</li>}
        {user.company && <li>Company: {user.company}</li>}
        {user.public_repos && <li>Public Repos: {user.public_repos}</li>}
        {user.location && <li>Location: {user.location} </li>}
        {user.blog && <li>Personal Site: <a href={user.blog}>{user.blog}</a></li>}
      </ul>
      <a href={`https://github.com/${user.login}`}>View on Github</a>
    </div>
  )
}

export default UserDisplay
