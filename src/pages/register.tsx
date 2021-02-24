import { useState } from 'react';
import Router from 'next/router';
import Form from '../components/form';
import { useUser } from '../../lib/hooks';
import { createUser } from '../../api/userAPI';

const Signup = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      firstname: e.currentTarget.firstname.value,
      lastname: e.currentTarget.lastname.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    try {
      await createUser(body);
      Router.push('/login');
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <>
      <div className="login">
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
};

export default Signup;
