import React, { PropTypes } from 'react';
import s from './Header.css';

const Header = props => (
  <div className={s.header} >
    <h1><a href={props.link}>{props.title}</a></h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Header;
