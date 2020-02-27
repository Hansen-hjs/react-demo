import React from 'react';
import './404.css';
import { NavLink } from 'react-router-dom';
import image404 from '../../images/404.png';
import imageCloud from '../../images/404-cloud.png';

export default function Page404() {

    const message = '404 Page Not Found';

    const info = 'Please check that the URL you entered is correct, or click the button below to return to the homepage.';

    return (
        <div id="no-find">
            <div className="wscn-http404">
                <div className="pic-404">
                    <img className="pic-404__parent" src={ image404 } alt="404" />
                    <img className="pic-404__child left" src={ imageCloud } alt="404" />
                    <img className="pic-404__child mid" src={ imageCloud } alt="404" />
                    <img className="pic-404__child right" src={ imageCloud } alt="404" />
                </div>
                <div className="text-404">
                    <div className="text-404__oops">OOPS!</div>
                    <div className="text-404__info">
                        All rights reserved
                        <a style={{ color: '#20a0ff' }} href="https://wallstreetcn.com">wallstreetcn</a>
                    </div>
                    <div className="text-404__headline">{ message }</div>
                    <div className="text-404__info">{ info }</div>
                    <NavLink to="/" className="text-404__return-home">Back to home</NavLink>
                </div>
            </div>
        </div>
    )
}