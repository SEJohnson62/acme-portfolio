import React from 'react';

const Notes = ({notes})=> {
  console.log("In Notes");
  return(
    <ul>
    {
    notes.map( note => {
      return(
      <li key= {note.id}>
        { note.text }
        <button data-id='{note.id}'>X</button>
      </li>)
    })}
    </ul>
  )
}

export default Notes;
