import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [values, setValues] = useState({ username: '', password: '' });

  const handleChange = (event, name) => {
    event.persist();
    setValues((prevState) => ({ ...prevState, [name]: event.target.value }));
  };

  const hangleSubmit = async (event) => {
    const { username, password } = values;
    event.preventDefault();
    try {
      await login(username, password);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={hangleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input
              required
              type="text"
              id="username"
              onChange={(event) => handleChange(event, 'username')}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input
              required
              type="password"
              id="password"
              onChange={(event) => handleChange(event, 'password')}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
