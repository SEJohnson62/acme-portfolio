import React from 'react';

const Nav = ({ view, notes, vacations, followingCompanies })=> {
  console.log("In Nav");
  return (
    <nav>
      <a href='#view=notes' className={ view === 'notes' ? 'selected': ''}>
      Notes ({ notes.length })</a>

    </nav>
  );
}
/*
<a href='#view=vacations' className={ view === 'vacations' ? 'selected': ''}>
      Vacations ({ vacations.length })</a>
      <a href='#view=followingCompanies' className={ view === 'followingCompanies' ? 'selected': ''}>
      Companies ({ followingCompanies.length })</a>
      */
export default Nav;
