import React from 'react';
import s from './Footer.css';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.bar} />
      <p>© Michael Sargent 2016.&nbsp;<a href="https://github.com/mksarge/react-static-template">Source</a></p>
    </footer>
  );
}

export default Footer;
