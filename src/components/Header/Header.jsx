import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from './styles.module.css'

function Header() {
  return (
    <header className= {styles.header}>
      <div className= {styles.logo}>
      <div className= {styles.logoLang}>Lang</div>
      <div className= {styles.logoApp}>App</div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;