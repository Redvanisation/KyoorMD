/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useLayoutEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Layout from '../containers/Layout';
import { baseUrl } from '../helpers';
import { UserContext } from '../providers/UserProvider';

const Signup = () => {
  const userCtx = useContext(UserContext);
  const password = useRef({});
  const {
    handleSubmit, register, errors, watch,
  } = useForm();

  password.current = watch('password', '');
  const history = useHistory();

  useLayoutEffect(() => {
    if (userCtx.cookies.user) {
      // window.location = '/';
      // alert('Already logged in!');
      history.push('/');
    }
  });

  const onSubmit = (values) => {
    axios({
      method: 'post',
      url: `${baseUrl}register`,
      data: {
        values,
      },
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          // console.log(res.data);
          // userCtx.setCookie('user', res.data.currentUser);
          alert('Registration successful!');
          window.location = '/auth';
        }
      })
      .catch(() => alert('Error registering in!'));
  };

  return (
    <Layout>
      <main className="form-container">
        <h2 className="title is-3">Sign up</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                placeholder="Username"
                name="username"
                type="text"
                required
                ref={register({
                  required: 'Required',
                })}
              />
              {errors.username && errors.username.message}
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                placeholder="Email"
                name="email"
                type="email"
                required
                ref={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                placeholder="Password"
                name="password"
                type="password"
                required
                ref={register({
                  required: 'You must specify a password',
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                })}
              />
              {errors.password && errors.password.message}
            </div>
          </div>

          <div className="field">
            <label className="label">Password Confirmation</label>
            <div className="control">
              <input
                className="input"
                placeholder="Password Confirmation"
                name="password_repeat"
                type="password"
                ref={register({
                  validate: (value) => value === password.current || 'The passwords do not match',
                })}
              />
              {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
            </div>
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </main>
    </Layout>
  );
};

export default Signup;
