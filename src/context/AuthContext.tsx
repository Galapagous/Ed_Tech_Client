import { createContext, useState, type ReactNode } from 'react';
import secureLocalStorage from 'react-secure-storage';

export interface IAuthContext {
  user: string | null;
  token: string | null;
}

export const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  let token: string = '';
  let user = '';
  if (typeof secureLocalStorage !== 'undefined') {
    token = secureLocalStorage.getItem('_el_token')?.toString() as string;
    user = secureLocalStorage.getItem('_el_user')?.toString() as string;
  }
  const [authDetails, setAuthDetails] = useState<IAuthContext>({
    user,
    token: token || '',
  });

  return (
    <AuthContext.Provider
      value={{
        authDetails,
        setAuthDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
