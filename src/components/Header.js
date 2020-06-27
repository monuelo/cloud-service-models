import React from 'react';

const Header = ({ title, subtitle }) => {
    return (
        <div className="header">
            <p className="subtitle">{subtitle}</p>
            <h4 className="title">{title}</h4>
        </div>
    )
}

export default Header;