import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

function Burger () {

  const [display, setDisplay] = useState(false);
  const width = useWindowWidth();

  let menuClass = display && width <= 800 ? "drop-down" : "hidden"
  let buttonClass = display ? "icon active" : "icon"

  return (
      <div>
      <div className={buttonClass} onClick={() => {setDisplay(!display)}}><i className="fa fa-bars"></i></div>
      <MenuItems mainClass={menuClass}/>
      </div>
    );
}

function MenuItems (props) {
  return (
    <div className={props.mainClass}>
      <Link className="menu-item" to='/cv'>CV</Link>
      <Link className="menu-item" to='/games'>Games</Link>
    </div>
  );
}

function Header () {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header container topnav">
          <p className="logo-text"><Link to='/'>Debesh Mandal</Link></p>
          <div className="menu">
            <MenuItems mainClass="items"/>
            <Burger />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;