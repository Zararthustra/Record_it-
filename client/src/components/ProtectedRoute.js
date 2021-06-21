import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest}) {

    const username = localStorage.getItem("username");

    return (
        <Route {...rest} render={ (props) => {
            if (username !== null) {
                return <Component />
            } else {
                return (
                    <Redirect to={{
                        pathname: '/',
                        state: { from: props.location
                        }}}
                    />
                )
            }
        }}/>
    )
};

export default ProtectedRoute;