import { useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';
import { axiosAuth } from './axios';
import { useStore } from './userContext';

export function useAxiosAuth() {
  const { authDetails, setAuthDetails } = useStore();
  let token = '';
  if (typeof window !== 'undefined')
    token = secureLocalStorage.getItem('_el_token')?.toString() || '';

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config: any) => {
        if (!config.headers['authorization']) {
          //config.headers["Authorization"] = auth.authToken;
          config.headers['authorization'] = 'Bearer ' + token;
        }
        return config;
      },
      (error: any) => Promise.reject(error)
    );

    const responseIntercept = axiosAuth.interceptors.response.use(response => response);

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [setAuthDetails, authDetails]);

  return axiosAuth as any;
}
