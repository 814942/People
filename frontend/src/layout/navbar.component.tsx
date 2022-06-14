import React from "react";

import { NavBar } from './navbar';

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const NavBarLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
