import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ blackNavbar }) => {
  const [showMenu, setShowMenu] = useState(false);

  const openHiddenMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={blackNavbar ? "black" : ""}>
      <div className="logo-section">
        <img src={Logo} />
        <div className="title">Pexels</div>
      </div>
      <div className="menu-section">
        <ul>
          <li>Explorar</li>
          <li>Licença</li>
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <div className="user-avatar">
            <img src="https://avatars.dicebear.com/4.5/api/male/william%20henrique.svg" />
          </div>
          <FontAwesomeIcon icon={faChevronDown} className="arrow-down-icon" />
          <div className="btn-bars" onClick={openHiddenMenu}>
            <FontAwesomeIcon icon={faBars} className="bars-icon" />
          </div>
          <button className="upload-button">Fazer upload</button>
        </ul>
      </div>
      {showMenu && (
        <div className="hidden-menu">
          <ul>
            <li>Explorar</li>
            <li>Licença</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
