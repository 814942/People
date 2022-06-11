import React from "react";
import { AppBar, Button } from '@material-ui/core';

import { RouteComponentProps } from "@reach/router";

export const NavBar: React.FC<RouteComponentProps> = () => {
  return (
    <AppBar position="fixed">
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Button color="inherit" href="/dashboard">
        People's Dashboard
      </Button>
      </div>
    </AppBar>
  );
};
