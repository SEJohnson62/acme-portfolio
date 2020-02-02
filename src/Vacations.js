import React, { useState } from 'react';

const Vacations = ({vacations})=> {
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  console.log("In vacations ", vacations);
  return(
    <ul>
    {
    vacations.map( vacation => {
      return(
      <li key= {vacation.id}>
        <hr />
      </li>)
    })}
    </ul>
  )
}

export default Vacations;
