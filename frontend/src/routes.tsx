import React from "react";
import { Router } from "@reach/router";

import { Layout } from './layout/layout.component';
import { DashboardPage } from './pages/dashboard.page';
import { NotFound } from "./components/notFound/not-found";

export function Routes() {
  return (
    <Layout>
      <Router>
        <DashboardPage path="/dashboard"/>
        <NotFound default />
      </Router>
    </Layout>
  );
}
