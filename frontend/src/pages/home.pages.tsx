import React, { FC } from "react";

import { RouteComponentProps } from "@reach/router";

type TParams = { id: string };

export const HomePage: FC<RouteComponentProps> = (props: RouteComponentProps<TParams>) => {
  console.log(props)
  return (
    <div style={{ margin: "5rem", textAlign: "center" }}>Hello world</div>
  )
};
