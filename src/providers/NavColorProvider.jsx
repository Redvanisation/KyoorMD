import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const NavColorContext = createContext(null);

const NavColorProvider = ({ children }) => {
  const [navColor, setNavColor] = useState('home');

  return (
    <NavColorContext.Provider
      value={{
        navColor,
        setNavColor,
      }}
    >
      {children}
    </NavColorContext.Provider>
  );
};

NavColorProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default NavColorProvider;
