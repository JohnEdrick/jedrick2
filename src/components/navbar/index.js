import {
  NavbarContainer,
  NavLogo,
  NavLink,
  Link,
  Burger,
  SideLinks,
  SideMenu,
  CloseButton,
} from "./navbarElements";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

function Navbar() {
  const [isVisible, setVisible] = useState(false);
  const toggleSideBar = () => setVisible(!isVisible);
  const dropAnimation = useTransition(isVisible, {
    from: { y: -100, opacity: 0 },
    enter: { y: 500, opacity: 1 },
    leave: { y: +100, opacity: 0 },
  });
  const NavItems = [
    {
      id: 1,
      name: "Home",
      destination: "home",
    },
    {
      id: 1,
      name: "About",
      destination: "about",
    },
    {
      id: 1,
      name: "Portfolio",
      destination: "portfolio",
    },
    {
      id: 1,
      name: "Contact",
      destination: "contact",
    },
  ];
  return (
    <>
      <SideMenu>
        {dropAnimation((style, item) =>
          item ? (
            <animated.div styled={style}>
              <SideLinks>
                <CloseButton onClick={toggleSideBar}>
                  <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                {NavItems.map((item, key) => {
                  return (
                    <NavLink>
                      <Link
                        to={item.destination}
                        smooth
                        onClick={toggleSideBar}
                      >
                        {item.name}
                      </Link>
                    </NavLink>
                  );
                })}
              </SideLinks>
            </animated.div>
          ) : (
            ""
          )
        )}
      </SideMenu>
      <Router>
        <NavbarContainer>
          <NavLogo to="#fdfd">JE</NavLogo>
          <Burger onClick={toggleSideBar}>
            <FontAwesomeIcon icon={faBars} />
          </Burger>
        </NavbarContainer>
      </Router>
    </>
  );
}
export default Navbar;
