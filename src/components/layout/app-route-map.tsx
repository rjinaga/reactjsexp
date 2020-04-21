import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Loading = <div style={{ color: '#474747', fontWeight: 'bold', padding: '5px' }}>Loading...</div>;

/* Code-splitting Imports */
const Dashboard =  React.lazy(() => import('../dashboard/dashboard-view'));
const CustomerPage = React.lazy(() => import('../admin/customer/index'));
const EditCustomerPage = React.lazy(() => import('../admin/customer/index'));
const CustomerListPage = React.lazy(() => import('../admin/customer-list/index'));


class AppRouteMap extends React.Component {
  render() {
    return (
      <Switch>
        <React.Suspense fallback={Loading}>

        {/* Dashboard Page */}
        <Route path="/dashboard" component={Dashboard} />
        <Route key="/customer" path="/customer" component={CustomerPage} />
        <Route key="/customer-list" path="/customer-list" component={CustomerListPage} />
        <Route key="/edit-customer/:name?" path="/edit-customer/:name?" component={EditCustomerPage}/>,
        </React.Suspense>
      </Switch>
    );
  }
}

export default AppRouteMap;
