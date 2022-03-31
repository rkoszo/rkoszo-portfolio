import React from 'react';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {['home', 'about', 'skills', 'works', 'contact'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
