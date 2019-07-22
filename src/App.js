import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'


export default class App  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path={'/login'} component={Login}></Route>
                        <Route path={'/'} component={Admin}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
