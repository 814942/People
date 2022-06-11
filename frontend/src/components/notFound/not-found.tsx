import { Link, RouteComponentProps } from "@reach/router";
import React, { FC } from "react";

import "./not-found.css"

type TParams = { default: boolean };

export const NotFound: FC<RouteComponentProps> =  (props: RouteComponentProps<TParams>) => {
  // To do: redirect to the Home page
  return (
    <div className="container_not_found">
      <Link className="title_not_found" to="/">
        Back to home
      </Link>
    </div>
  )
}