import { useState } from 'react';
import { useLoaderData, useNavigate, Form } from 'react-router-dom';

import { loginUser } from '../api';

export function loader({ request }) {
  const url = new URL(request.url);
  return url.searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  console.log(email, password);
  return null;
}

const Login = () => {
  const message = useLoaderData();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => navigate('/host', { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h3 className='login-error'>{message}</h3>}
      {error && error.message && <p className='login-error'>{error.message}</p>}
      <Form method='post' className='login-form'>
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
};

export default Login;
