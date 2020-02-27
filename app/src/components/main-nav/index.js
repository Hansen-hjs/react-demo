import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-nav.css';

export default function MainNav() {
    return (
        <nav className="menu">
            <NavLink to="/home" className="menu-item" activeClassName="menu-active">
                <button className="button">home</button>
            </NavLink>
            <NavLink to="/about" className="menu-item" activeClassName="menu-active">
                <button className="button">about</button>
            </NavLink>
        </nav>
    )
}