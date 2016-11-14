import React, { PropTypes } from 'react';
import s from './Header.css';

const Header = props => (
  <div className={s.header} >
    <h1>{props.title}</h1>
  </div>
);

Header.propTypes = { title: PropTypes.string };

export default Header;
