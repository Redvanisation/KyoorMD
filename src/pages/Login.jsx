/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Layout from '../containers/Layout';
import { baseUrl } from '../helpers';

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    axios({
      method: 'post',
      url: `${baseUrl}auth`,
      data: {
        values,
      },
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log(res.data);
        }
      })
      .catch(() => alert('Error logging in!'));
  };

  return (
    <Layout>
      <main className="form-container">
        <h2 className="title is-3">Login</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

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
                    message: 'Invalid email address'
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
                  validate: (value) => value !== 'admin' || 'Nice try!',
                })}
              />
              {errors.password && errors.password.message}
            </div>
          </div>

          <button className="button" type="submit">Login</button>
        </form>
      </main>
    </Layout>
  );
};

export default Login;
