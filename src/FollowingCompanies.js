import React from 'react';

const FollowingCompanies = ({followingCompanies})=> {

  return(
    <div>
      <h2>Id's of Companies This User is Following:</h2>
    {
    followingCompanies.map( company => {
      return(
      <li key= {company.id}>
        { company.id }
      </li>)
    })}
    </div>
  )
}

export default FollowingCompanies;
