import React from "react";
import { Router } from "@reach/router";

import { Layout } from './layout/layout.component';
import { DashboardPage } from './pages/dashboard.page';
import { HomePage } from "./pages/home.pages";

export function Routes() {
  return (
    <Layout>
      <Router>
        <HomePage path="/"/>
      </Router>
      <Router>
        <DashboardPage path="/dashboard"/>
      </Router>
    </Layout>
  );
}
