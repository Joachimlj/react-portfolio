import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner-wrapper">
        <div className="site-header__inner-wrapper__logo">
          <NavLink exact to="/">
            Joachim Joergensen
          </NavLink>
        </div>
        <nav className="site-header__inner-wrapper__nav">
          <ul>
            <li>
              <NavLink to="/about" activeClassName="is-active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="is-active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
