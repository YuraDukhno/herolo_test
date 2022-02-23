import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Header/index.css";
import { ReactComponent as Toggle } from "../../Assets/toggle.svg"
const Header = () => {

  const [toggle, setToggle] = useState(false)
  console.log("🚀 ~ file: index.jsx ~ line 8 ~ Header ~ toggle", toggle)

  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <h1 className="capture">
            <Link to={"/"}>Weather App</Link>
          </h1>
        </div>
        {!toggle && <Toggle onClick={e => setToggle(!toggle)} className="toggle"/>}
        <nav className="navbar">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to={"/favorites"}>Favorites</Link>
            </li>
          </ul>
          { toggle && 
          <ul className="collapse">
            <li onClick={e => setToggle(!toggle)} className="nav__item--collapse">
              <Toggle className="toggle__collapse"/>
            </li>
            <li className="nav__item--collapse">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav__item--collapse">
              <Link to={"/favorites"}>Favorites</Link>
            </li>
          </ul>}
        </nav>
      </div>
    </header>
  );
};

export default Header;

