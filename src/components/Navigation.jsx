import React, { useState } from 'react';
import { Navbar } from 'react-bulma-components';

const Navigation = () => {
  const [showHide, setShowHide] = useState(false);

  return (
    <Navbar
      fixed="top"
      active={showHide}
      transparent={false}
      className="navigation"
    >
      <Navbar.Brand>
        <a href="/" className="navigation__logo-div">
          <img src="./img/logo/KyoorMD-logo.svg" alt="KyoorMD" className="navigation__logo-div--logo" />
        </a>
        <Navbar.Burger onClick={() => setShowHide(!showHide)} />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item href="#" className="navigation__item">
            About
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Business
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Family
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Blog
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Contact
          </Navbar.Item>
        </Navbar.Container>

      </Navbar.Menu>
    </Navbar>
  );
};

export default Navigation;
