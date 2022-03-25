import {useContext, useEffect} from 'react'
import KeycloakContext from './KeycloakProvider.js'
import { AxiosKeycloak } from './Axios';
function useAxiosKeyCloak() {
    const auth = useContext(KeycloakContext);
    useEffect(() => {

        const requestIntercept = AxiosKeycloak.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.token}`;
                }
                console.log(config.headers);
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = AxiosKeycloak.interceptors.response.use(
            response => response,
             (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            AxiosKeycloak.interceptors.request.eject(requestIntercept);
            AxiosKeycloak.interceptors.response.eject(responseIntercept);
        }
    }, [auth]);
  return AxiosKeycloak;
}

export default useAxiosKeyCloak;