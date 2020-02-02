import React from 'react';

const Notes = ({notes})=> {
  console.log("In Notes");
  return(
    <div>
      <h2>Notes</h2>
    {
    notes.map( note => {
      return(
      <li key= {note.id}>
        { note.text }
        <button data-id='{note.id}'>X</button>
      </li>)
    })}
    </div>
  )
}

export default Notes;
