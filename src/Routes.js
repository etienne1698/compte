import React from 'react';
import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import AuthService from './services/AuthService';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';

const SecretRoute = ({ component: Component, ...rest }) => {
    if (rest.path === '/login' || rest.path === '/register') {
        return <Route {...rest} component={Component} />
    } else {
        return <Route {...rest} render={(props) => (
            AuthService.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    }
};

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/history/:userId',
        //component: HistoryByeUser
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/register',
        component: Register
    },
    {
        //component: Error404
    }
]

function Routes() {
    return (
        <Switch>
            {routes.map((route) => (
                <SecretRoute key={route.path || 'default'}
                    path={route.path}
                    exact={route.exact}
                    component={route.component} />
            ))}
        </Switch>
    )
}

export default Routes;