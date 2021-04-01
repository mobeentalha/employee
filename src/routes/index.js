import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {List, Profile, Blog, Error} from '../components'



const Routes = () => {
    return (
        <Switch>
            <Route path={`/`} component={List} exact  />
            <Route path={`/profile`} component={Profile} />
            <Route path={`/blog`} component={Blog} />
            <Route path={`/error`} component={Error} />
            <Redirect to="/error" />
        </Switch>
    );
}


export default Routes;
