import React from "react";

import { NavBar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div
      style={{ 
        background: "linear-gradient(to left, #2C5364, #203A43, #0F2027)",
        height: "100vw",
        width: "100vw"
      }}>
        {children}
      </div>
    </>
  );
};
