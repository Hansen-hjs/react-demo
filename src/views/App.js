import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routeList from "./router";

export default function App(props) {

    // console.log(props, routeList.length);

    const last = routeList.length - 1;
    
    // <Redirect from="/" to="/index"></Redirect>

    return (
        <div className="page">
            <Switch>
                <Route exact path="/" render={ () => <Redirect to={ routeList[0].path } /> } />
                { 
                    routeList.map((item, index) => {
                        if (last === index) {
                            return <Route component={ item.component } key={ `app-${ item.path }` } />
                        } else {
                            return <Route path={ item.path } component={ item.component } key={ `app-${ item.path }` } />
                        }
                    }) 
                }
            </Switch>
        </div>
    )
}