import React, { FC } from "react";

import { RouteComponentProps } from "@reach/router";
import { Button } from "@material-ui/core";

import "./home.css";

type TParams = { id: string };

export const HomePage: FC<RouteComponentProps> = (props: RouteComponentProps<TParams>) => {
  return (
    <div className="site-home-container">
      <div className="landing-home-introduction">
        <div className="content relative-wrapper">
          <div className="home-text">
            <h1>Free resume pool for modern job seekers</h1>
            <p>By employing the best practices and innovative tech, Wozber boosts your chances of landing a better job – completely for free.</p>
            <div className="home-cta">
              {/*To do: make custom buttons */}
              <Button color="inherit">
                Charge Resume
              </Button>
              <div className="caption">No registration required</div>
            </div>
          </div>
          <div className="home-preview">
            <div className="image-wrapper">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
