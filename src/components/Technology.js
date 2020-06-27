import React from 'react';

const Managed = ({ children }) => {
    return (
        <li className="managed">
            {children}
        </li>
    )
}

const Provided = ({ children }) => {
    return (
        <li className="provided">
            {children}
        </li>
    )
}

export { Managed, Provided }