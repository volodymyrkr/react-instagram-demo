import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="layout">
                    <div>
                        <a />
                    </div>
                    <input placeholder="Search" type="text" />
                    <nav>
                        <a className="explore" />
                        <a className="likes" />
                        <a className="profile" />
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;