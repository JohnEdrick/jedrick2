import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const NavbarContainer = styled.nav`
  color: #dddfdf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 70%;
  left: 0;
  right: 0;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1008px) {
    width: 90%;
  }
`;
export const Burger = styled.button`
  font-size: 2rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const NavLogo = styled(LinkS)`
  font-family: "Odibee Sans", cursive;
  cursor: pointer;
  font-size: 6.2vh;
  background: linear-gradient(
    90deg,
    #fa0000,
    #fd0021,
    #fd0036,
    #f90049,
    #f3005c,
    #e9006f,
    #da0082,
    #c80095,
    #b000a7,
    #9200b7,
    #6a00c5,
    #171ad1
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavLink = styled.li``;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const SideMenu = styled.div`
  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    top: 0;
    justify-content: center;
    text-align: center;
    width: 100%;
    z-index: 1;
    color: white;
    background-color: #1f1e1e;
  }
`;
export const Link = styled(LinkS)`
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    border-bottom: 1.5px solid white;
  }
`;

export const SideLinks = styled.ul`
  list-style-type: none;
  font-family: "Poppins", sans-serif;
  font-size: 2.2rem;
`;
