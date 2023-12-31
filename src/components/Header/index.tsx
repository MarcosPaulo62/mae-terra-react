import { useState } from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import SideBar from "../SideBar";
import "./index.css";

export default function Header() {
  const [sideBar, setSideBar] = useState<boolean>(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <header className="header-container header">
      <button onClick={showSideBar} data-testid="header-open-btn">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {sideBar && <SideBar active={setSideBar} />}
      <Link to="/" data-testid="homepage-link">
        <img
          src={logo}
          alt="Desenho de uma montanha, escrito embaixo 'Mão Terra Camping Store'"
          className="logo"
        />
      </Link>
      <div className="header__container__user">
        <Link to="/cart" data-testid="cart-link">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <Link to="/user" data-testid="user-link">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </header>
  );
}
