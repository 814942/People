import React, { FC } from "react";

import { RouteComponentProps } from "@reach/router";

type TParams = { id: string };

export const DashboardPage: FC<RouteComponentProps> = (props: RouteComponentProps<TParams>) => {
  return (
    <div style={{ margin: "5rem", textAlign: "center" }}>Dashboard</div>
  )
};
