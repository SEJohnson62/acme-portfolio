import React from 'react';

const Nav = ({ view, notes, vacations, followingCompanies })=> {

  return (
    <nav>
      <a href='#view=notes' className={ view === 'notes' ? 'selected': ''}>
      Notes</a>

      <a href='#view=vacations' className={ view === 'vacations' ? 'selected': ''}>
      Vacations</a>

      <a href='#view=followingCompanies' className={ view === 'followingCompanies' ? 'selected': ''}>
      Companies</a>
    </nav>
  );
}

export default Nav;
