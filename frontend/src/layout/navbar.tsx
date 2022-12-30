import React, { useState } from "react";
import { AppBar, Button, InputAdornment, styled, TextField } from '@material-ui/core';

import { RouteComponentProps } from "@reach/router";

import { AbcSharp, AccountCircleSharp, QuestionMarkSharp } from '@mui/icons-material';

import "./navbar.css";

const StyledTextField = styled(TextField)({
    "& .MuiFilledInput-root": {
      color: "#fff7f7",
      backgroundColor: "transparent",
      border: "1px solid #30363d",
      fontSize: "14px",
      borderRadius: "6px"
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none"
    },
    "& .MuiFilledInput-input": {
      padding: "0 15px",
      minHeight: "28px"
    },
    "& .MuiFilledInput-colorSecondary.MuiFilledInput-underline:after": {
      borderBottomColor: "transparent"
    }
}) as typeof TextField;

const StyledButton = styled(Button)({
    "& .MuiButton-label": {
      fontSize: "14px !important",
      textTransform: "none"
    }
}) as typeof Button;

export const NavBar: React.FC<RouteComponentProps> = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <AppBar className="header--navbar">
      <div className="header--item">
        <Button className="header--link" variant="outlined" href="/home">
          {/* TODO: insert logo here */}
          <AbcSharp sx={{ color: "white" }} />
        </Button>
      </div>
      <div className="header--item header--item--full full_width">
        <div className="header--search">
          <StyledTextField 
            id="navbar__search"
            type="text"
            placeholder="Search or jump to..."
            variant="filled"
            color="secondary"
            fullWidth
            InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                  <QuestionMarkSharp 
                  sx={{ 
                    fontSize: "20px",
                    border: "1px solid #9e9e9e",
                    borderRadius: "10px",
                    color: "#9e9e9e",
                    margin: "5px"
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <nav className="global--navbar">
          <StyledButton className="navbar--items" color="inherit" href="/dashboard">
            Dashboard
          </StyledButton>
          <StyledButton className="navbar--items" color="inherit" href="/home">
            Home
          </StyledButton>
        </nav>
      </div>
      <div className="header--item menu--button ">
        <button
          type="button"
          className="prof--menu__main"
          onClick={() => {
            setMenuDisplay(!menuDisplay)
          }}
          onBlur={() => {
            setMenuDisplay(!menuDisplay)
          }}
        >
          <div
            id="text-wrapper"
            className="prof-menu__text-wrapper"
          >
            <AccountCircleSharp sx={{ color: "white" }} />
          </div>
        </button>
        {menuDisplay && 
          <div className="card dropdown-menu">
            {/* TODO: insert user name here */}
            <div className="current--user">
              <h5 className="user--profile">Signed in as <strong>John Doe</strong></h5>
            </div>
            <div role="none" className="dropdown--divider"></div>
            <StyledButton color="inherit" className="dropdown--items">Settings</StyledButton>
            <div role="none" className="dropdown--divider"></div>
            <div className="logout">
              <StyledButton color="inherit" className="dropdown--items">
                Log out
              </StyledButton>
            </div>
          </div>}
      </div>
    </AppBar>
  );
};
