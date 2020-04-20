import React from 'react';
import NavMenuView from './nav-menu-view';

class NavMenu extends React.Component {
    private menu: Array<MainMenuItem> = [
        {
            name: 'DASHBOARD',
            tooltip: 'Dashboard',
            url: '/dashboard',
        },
        {
            name: 'CUSTOMER',
            url: '/customer',
            tooltip: 'Customer'
        },
        {
            name: 'CUSTOMER LIST',
            url: '/customer-list',
            tooltip: 'Customer List'
        }
    ];
    
    render(): JSX.Element {
        return (
            <NavMenuView
                menu={this.menu}
            />);
    }
}

export interface MainMenuItem {
    name: string;
    tooltip?: string;
    url: string;
}

export default NavMenu;