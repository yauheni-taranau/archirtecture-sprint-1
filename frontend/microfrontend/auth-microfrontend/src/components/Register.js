import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import { register as SignUp } from '../utils/api';
import "../index.css";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    SignUp(userData)
      .then((res) => {
        dispatchEvent(new CustomEvent('register', {}));
      })
      .catch((err) => {
        dispatchEvent(new CustomEvent('register-fail', {}));
      });
  }
  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Регистрация</h3>
          <label className="auth-form__input">
            <input type="text" name="email" id="email"
              className="auth-form__textfield" placeholder="Email"
              onChange={e => setEmail(e.target.value)} required />
          </label>
          <label className="auth-form__input">
            <input type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="Пароль"
              onChange={e => setPassword(e.target.value)} required />
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className="auth-form__button" type="submit">Зарегистрироваться</button>
          <p className="auth-form__text">Уже зарегистрированы? <a className="auth-form__link" href="/signin">Войти</a></p>
        </div>
      </form>
    </div>
  )
}

export default Register;
