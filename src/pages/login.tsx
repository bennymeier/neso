import { useState } from 'react';
import Router from 'next/router';
import Form from '../components/form';
import { useUser } from '../../lib/hooks';
import { loginUser } from '../../api/userAPI';

const Login = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    try {
      await loginUser(body);
      Router.push('/');
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <div>
      <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
