import React from 'react';
import NavMenu from './components/layout/nav-menu';
import Header from './components/layout/header';
import AppRouteMap from './components/layout/app-route-map';

class App extends React.Component {
  componentDidMount() {
    if (window.location.pathname === '/') {
      // Find current role and dashboard url to navigate
      window.location.assign('/dashboard');
    }
  }
  render () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <NavMenu/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <AppRouteMap/>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
