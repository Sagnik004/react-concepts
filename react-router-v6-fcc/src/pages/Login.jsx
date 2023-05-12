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
  
  const data = await loginUser({ email, password });
  console.log(data);
  window.localStorage.setItem('loggedin', true);

  return null;
}

const Login = () => {
  const message = useLoaderData();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStatus('submitting');
  //   setError(null);
  //   loginUser(loginFormData)
  //     .then((data) => navigate('/host', { replace: true }))
  //     .catch((err) => setError(err))
  //     .finally(() => setStatus('idle'));
  // };

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h3 className='login-error'>{message}</h3>}
      {error && error.message && <p className='login-error'>{error.message}</p>}
      <Form method='post' className='login-form'>
        <input
          name='email'
          type='email'
          placeholder='Email address'
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
};

export default Login;
