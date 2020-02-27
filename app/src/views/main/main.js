import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './main.css';
import routeList from '../router';

export default  function Main(props) {

    // console.log('Main', props);

    /** 渲染路由索引 */
    const index = 0;

    const path = routeList[index].path || props.match.path;

    const list = routeList[index].children;

    return (
        <div className="main">
            <nav className="menu">
                { 
                    list.map(item => (
                        <NavLink to={ item.path } key={ `main-menu-${ item.path }` } className="menu-item" activeClassName="menu-active">
                            <button className="button">{ item.name }</button>
                        </NavLink>   
                    )) 
                }
            </nav>
            <Switch>
                <Route exact path={ path } render={ () => (<Redirect to={ list[0].path } />) } />
                { 
                    list.map(item => (
                        <Route path={ item.path } component={ item.component } key={ `main-child-${item.path}` } />
                    )) 
                }
            </Switch>
        </div>
    )
}