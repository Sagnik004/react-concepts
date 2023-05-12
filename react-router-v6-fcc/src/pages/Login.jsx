import {
  useLoaderData,
  useNavigation,
  useActionData,
  Form,
  redirect,
} from 'react-router-dom';

import { loginUser } from '../api';

export function loader({ request }) {
  const url = new URL(request.url);
  return url.searchParams.get('message');
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const data = await loginUser({ email, password });
    window.localStorage.setItem('loggedin', true);
    console.log('redirecting to /host');
    return redirect('/host');
  } catch (error) {
    console.error('Error occurred during login: ', error);
    return error.message;
  }
}

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const { state: status } = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="login-error">{message}</h3>}
      {errorMessage && <p className="login-error">{errorMessage}</p>}
      <Form method="post" replace className="login-form">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </Form>
    </div>
  );
};

export default Login;
