import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    secureLocalStorage.removeItem('_el_token');
    secureLocalStorage.removeItem('_el_user');
    navigate('/login');
  };
  return logout;
};
