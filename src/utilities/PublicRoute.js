import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';

function PublicRoute({ component, ...props }) {
  const Component = component;

  return (
    <Route
      {...props}
      render={(componentProps) => (
        <UserContext.Consumer>
          {(userContext) =>
            !!userContext.user.id ? (
              <Redirect to={'/'} />
            ) : (
              <Component {...componentProps} />
            )
          }
        </UserContext.Consumer>
      )}
    />
  );
}

export default PublicRoute;
