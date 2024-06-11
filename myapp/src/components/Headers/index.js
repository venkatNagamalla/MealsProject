import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";


import {
  Header,
  NavContainer,
  Logo,
  IconsContainer,
  Icons,
  Icon,
  Menu,
} from "./styledComponents";

import "./index.css";

const Headers = () => {
  const [sideBar, setSideBar] = useState(false);

  const bar = sideBar ? "0px" : "-280px";

  const settingSideBar = () => setSideBar((prev) => !prev);

  return (
    <Header>
      <NavContainer className="nav-container">
        <Logo>Foodie</Logo>
        <Menu type="button" onClick={settingSideBar}>
           {!sideBar ? <FiMenu color='#fff' />: <HiMiniXMark color="#fff" />}
        </Menu>
        <IconsContainer bar={bar}>
          <Icons>
            <NavLink onClick={settingSideBar} className="nav" to="/">
              <Icon>Home</Icon>
            </NavLink>
            <NavLink onClick={settingSideBar} className="nav" to="/search">
              <Icon>Search</Icon>
            </NavLink>
            <NavLink onClick={settingSideBar} className="nav" to="/favourite">
              <Icon>Favourite</Icon>
            </NavLink>
          </Icons>
        </IconsContainer>
      </NavContainer>
    </Header>
  );
};

export default Headers;
