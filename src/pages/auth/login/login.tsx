import { useContext, useState } from 'react';
import Background2 from '../../../assets/image/pexels-cottonbro-6153738.jpg';
import Form from '../../../components/molecule/form';
import { loginSchema } from '../../../validation/auth';
import { formInput } from '../data';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useMakeRequest } from '../../../hooks/useMakeRequest';
import { AUTH_API } from '../../../api/endpoint/endpoint';
import secureLocalStorage from 'react-secure-storage';
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const makeRequest = useMakeRequest();
  const handleSuccess = (data: any) => {
    if (context === undefined) return;
    if (!data?.username || !data.token) return;
    context.setAuthDetails({ user: data.username, token: data.token });
    secureLocalStorage.setItem('_el_token', data?.token);
    secureLocalStorage.setItem('_el_user', data?.username);
    navigate('/');
  };
  const handleLogin = async (data: any) => {
    setLoading(true);
    makeRequest(
      AUTH_API + '/login',
      'POST',
      data,
      handleSuccess,
      error => {
        console.log(error);
      },
      () => {
        setLoading(false);
      },
      { dontNotifyOnFailure: false }
    );
  };
  return (
    <div
      className="h-screen text-white bg-primary_100 flex items-center relative justify-center"
      style={{
        backgroundImage: `url(${Background2})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="sm:w-2/3 h-2/3 bg-slate-900/45 text-center sm:p-10 p-5">
        <h1 className="sm:mt-24 text-[2rem] mb-2">M-Learn</h1>
        <p className="mb-2 sm:text-base text-sm">
          Don't have an account?{' '}
          <Link className="text-blue-400 hover:text-blue-600" to="/register">
            Sign up
          </Link>
        </p>
        <div className="sm:w-2/3 mx-auto">
          <Form
            onSubmit={handleLogin}
            loading={loading}
            elements={formInput}
            schema={loginSchema}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
