import React, { createContext, useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext({});

export function KeycloakProvider() {
  const [auth, setAuth] = useState({ keycloak: null, authenticated: null, token: '' });

  const location = useLocation();

  useEffect(
    () => {
      const keycloak = Keycloak();
      keycloak.init({ onLoad: 'login-required' })
        .then(authenticated => {
          let authfile = { keycloak: keycloak, authenticated: authenticated, token: '' }
          if (authenticated) {
            authfile = { ...authfile, token: keycloak.token };
          }
          setAuth(authfile);
        })
    }, []
  );
  return (
    <KeycloakContext.Provider value={auth}>
      {
        auth?.keycloak
          ? auth?.authenticated
            ? <Outlet />
            : <Navigate to='/AuthError' state={{ from: location }} replace />
          : <></>
      }
    </KeycloakContext.Provider>
  )
}

export default KeycloakContext