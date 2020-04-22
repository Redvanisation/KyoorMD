import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';

const Layout = ({ children }) => (
  <>
    <Navigation />
    <div className="wrapper">
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
