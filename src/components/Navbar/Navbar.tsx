import { useState } from "react";
import styles from "./Navbar.module.css";
import React from "react";
import logo from "../../assets/logo.svg";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}
          <a href="#home" className={`${styles.logo}`}>
            <img className="max-h-12" src={logo} alt="logo" />
          </a>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Hjem
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Utforsk
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Registrer
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={`${styles.navLink}`}>
                Verv
              </a>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
