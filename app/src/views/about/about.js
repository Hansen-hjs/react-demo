import React from 'react';
import './about.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

export default function About(props) {

    // console.log('component-About', props);
    
    const nextPagePath = `/next:${Math.floor(Math.random() * 10) + 1}`;

    return (
        <div className="about">
            <img src={ logo } className="logo" alt="logo" />
            <p style={{ marginBottom: '10px' }}><code>props.content：</code>{ props.content || '' }</p>
            <a style={{ marginBottom: '10px' }} className="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            <NavLink to={ nextPagePath } style={{ marginBottom: '10px' }}>
                <button className="button green-btn">next-page</button>
            </NavLink>
            <NavLink to="/doc">
                <button className="button orange-btn">不存在的页面</button>
            </NavLink>
        </div>
    )
}