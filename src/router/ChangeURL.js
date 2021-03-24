import React, { Component } from 'react';
import routes from './../route'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class ChangeURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {this.showMenus(routes)}
                </Switch>
            </div>
        )
    }
    showMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return(
                <Route exact={route.exact} path={route.path} key={index} >  
                {route.main}      
                </Route>
                )
            })
        }
        return result
    }
}
export default ChangeURL