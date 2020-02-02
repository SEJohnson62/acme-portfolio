import React, { useState } from 'react';

const Vacations = ({vacations})=> {
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  console.log("In vacations ", vacations);
  return(
    <div>
      <h2>Vacations</h2>
    {
    vacations.map( vacation => {
      return(
      <li key= {vacation.id}>
        <hr />
      </li>)
    })}
    </div>
  )
}

export default Vacations;
