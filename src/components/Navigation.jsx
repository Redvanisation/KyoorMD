import React, { useState, useContext } from 'react';
import { Navbar } from 'react-bulma-components';
import { NavColorContext } from '../providers/NavColorProvider';
import { UserContext } from '../providers/UserProvider';

const Navigation = () => {
  const [showHide, setShowHide] = useState(false);
  const navCtx = useContext(NavColorContext);
  const userCtx = useContext(UserContext);


  // To control the navigation colors class depending on the url
  const handleNavColor = () => {
    switch (navCtx.navColor) {
      case 'screener':
        return 'navigation navigation-screener';
      default:
        return 'navigation';
    }
  };

  const handleLogout = () => {
    userCtx.removeCookie('user');
  };

  return (
    <Navbar
      fixed="top"
      active={showHide}
      transparent={false}
      className={handleNavColor()}
    >
      <Navbar.Brand>
        <a href="/" className="navigation__logo-div">
          <img src="./logo/KyoorMD-logo.svg" alt="KyoorMD" className="navigation__logo-div--logo" />
        </a>
        <Navbar.Burger onClick={() => setShowHide(!showHide)} position="start" />
        <span className="burger-text">Menu</span>

        <div className="navigation__button-div">
          <button type="button" className="btn navigation__button-div--btn">
            English
            <i className="navigation__button-div--icon"><img src="./icons8-usa.svg" alt="usa flag" className="navigation__button-div--icon-img" /></i>
          </button>
        </div>

      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container className="navigation__menu-container" position="end">
          <Navbar.Item href="#" className="navigation__item">
            About
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Blog
          </Navbar.Item>
          <Navbar.Item href="#" className="navigation__item">
            Contact
          </Navbar.Item>
          {
            userCtx.cookies.user
              ? (
                <Navbar.Item href="#" className="navigation__item" onClick={handleLogout}>
                  Logout
                </Navbar.Item>
              )
              : (
                <>
                  <Navbar.Item href="/auth" className="navigation__item">
                    Login
                  </Navbar.Item>
                  <Navbar.Item href="/register" className="navigation__item">
                    Register
                  </Navbar.Item>
                </>
              )
          }
        </Navbar.Container>

      </Navbar.Menu>
    </Navbar>
  );
};

export default Navigation;
