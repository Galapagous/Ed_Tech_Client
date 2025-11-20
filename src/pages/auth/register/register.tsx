import { useState } from 'react';
import Background2 from '../../../assets/image/wood1.jpg';
import Form from '../../../components/molecule/form';
import { registerSchema } from '../../../validation/auth';
import { registerForm } from '../data';
import { Link } from 'react-router-dom';
import { useMakeRequest } from '../../../hooks/useMakeRequest';
import { AUTH_API } from '../../../api/endpoint/endpoint';
const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const makeRequest = useMakeRequest();
  const handleRegister = async (data: any) => {
    makeRequest(
      AUTH_API + '/register',
      'POST',
      data,
      () => {},
      error => console.log(error),
      () => {
        setLoading(false);
      },
      { dontNotifyOnFailure: false, dontNotifyOnSuccess: false }
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
      <div className="sm:w-2/3 h-2/3 bg-slate-900/45 text-center sm:p-10 p-5 mx-auto">
        <h1 className="sm:mt-24 text-[2rem] mb-2">M-Learn</h1>
        <p className="mb-2 sm:text-base text-sm">
          Already have an account?{' '}
          <Link className="text-blue-400 hover:text-blue-600" to="/login">
            Sign in
          </Link>
        </p>
        <div className="sm:w-2/3 mx-auto">
          <Form
            onSubmit={handleRegister}
            loading={loading}
            elements={registerForm}
            schema={registerSchema}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
