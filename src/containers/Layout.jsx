import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => (
  <>
  
    <Navigation />
    <main className="wrapper">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
