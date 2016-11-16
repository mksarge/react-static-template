import React, { PropTypes } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './Layout.css';

const Layout = props => (
  <div className={s.container} >
    <Header title={props.title} link={props.link} />
    <div className={s.content} {...props} />
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

export default Layout;
