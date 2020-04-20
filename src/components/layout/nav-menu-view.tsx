import * as React from 'react';
import { Link } from 'react-router-dom';

/** view component */
class NavMenuView extends React.Component<NavMenuViewProps> {
 
    render(): JSX.Element {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{ height: '600px' }}>
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {this.props.menu.map(menuItem => {
                            return (
                                <li className="nav-item" key={menuItem.name}>
                                    <a className="nav-link">
                                        <i
                                            aria-hidden="true"
                                            style={{ width: 32, textAlign: 'center' }}
                                        />
                                        <span
                                            className="menu-title"
                                            title={menuItem.name}
                                        >
                                            <Link
                                                to={menuItem.url}
                                                title={menuItem.tooltip}
                                            >
                                                {menuItem.name}
                                            </Link>
                                        </span>
                                        <i className="arrow" />
                                    </a>
                                </li>);
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

interface NavMenuViewProps {
    menu: Array<MainMenuItem>;
}

export interface MainMenuItem {
    name: string;
    tooltip?: string;
    url: string;
}

export default NavMenuView;