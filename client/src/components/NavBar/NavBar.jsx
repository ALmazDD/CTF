import { ADMIN_ROUTE, LOGIN_ROUTE, CTF_ROUTE } from '../../utils/consts';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './NavBar.module.scss';
import './NavBar.module.scss';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  //functions
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  //react functions
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <NavLink className={classes.header__content__logo} to={CTF_ROUTE}>
          {' '}
          aitu_hack
        </NavLink>

        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <a href="/">PageOne</a>
            </li>
            <li>
              <a href="/">PageTwo</a>
            </li>
            <li>
              <a href="/">PageThree</a>
            </li>
          </ul>

          {user.isAuth ? (
            <div className={classes.header__content__buttons}>
              <button onClick={() => history.push(ADMIN_ROUTE)}>Admin panel</button>
              <button onClick={() => logOut()}>Log Out</button>
            </div>
          ) : (
            <div className={classes.header__content__buttons}>
              <button onClick={() => history.push(LOGIN_ROUTE)}>Log In</button>
            </div>
          )}
        </nav>

        <div className={classes.header__content__toggle}>
          {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
        </div>
      </div>
    </header>
  );
});

export default NavBar;
