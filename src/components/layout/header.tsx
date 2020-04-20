import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/dashboard">CRM PORTAL</a>
            </nav>
        );
    }
}

export default Header;