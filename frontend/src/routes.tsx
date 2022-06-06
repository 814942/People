import React from 'react';
import { Router } from '@reach/router';

import { Layout } from './layout/layout.component';
import { DashboardPage } from './pages/dashboard.page';

export function Routes() {
  return (
    <Layout>
      <Router>
        <DashboardPage/>
      </Router>
    </Layout>
  );
}
