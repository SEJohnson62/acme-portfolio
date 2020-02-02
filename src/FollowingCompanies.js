import React from 'react';

const FollowingCompanies = ({followingCompanies})=> {

  return(
    <ul>
    {
    followingCompanies.map( company => {
      return(
      <li key= {company.id}>
        { company.id }
      </li>)
    })}
    </ul>
  )
}

export default FollowingCompanies;
