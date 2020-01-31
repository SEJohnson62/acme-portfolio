const renderNotes = ()=> {
  let html = notes.map( note => {
    return `
      <li>
        ${ note.text }
        <button data-id='${note.id}'>X</button>
      </li>
    `;
  }).join('');

  html = `<h2>Notes (${ notes.length})</h2><ul>${html}</ul>`;
  notesContainer.innerHTML = html;

}
