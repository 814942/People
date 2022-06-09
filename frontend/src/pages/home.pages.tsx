import React, { FC } from "react";

import { RouteComponentProps } from "@reach/router";

type TParams = { id: string };

export const HomePage: FC<RouteComponentProps> = (props: RouteComponentProps<TParams>) => {
  // To do: create a stylesheet 
  return (
    <div 
    // style={{ 
    //   background: "linear-gradient(to left, #2C5364, #203A43, #0F2027)",
    //   height: "100vw",
    //   width: "100vw"
    // }}
    >
      <h2 style={{
        padding: "5rem",
        color: "white",
        textAlign: "center"
      }}>
        Hello world
      </h2>
    </div>
  )
};
