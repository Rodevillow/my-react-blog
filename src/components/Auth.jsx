import React from "react";
import { Link } from "react-router-dom";

// import logoSvg from "../assets/images/svg/logo.svg";
import "../assets/scss/pages/signIn.scss";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  render() {
    return (
      <div className="Auth">
        <div className="Auth-wrapper">
          {/* <img className="Auth__logo big-icon" src={logoSvg} alt="Big Logo" /> */}
          <h3>Авторизация</h3>
          <form>
            <div>
              <input
                className="input input__default"
                type="text"
                name="login"
                placeholder="Введите почту"
                spellCheck={false}
                onChange={this.onEmailChange}
                value={this.props.email}
              />
            </div>
            <br />
            <div>
              <input
                className="input input__default"
                type="password"
                name="password"
                placeholder="Введите пароль"
                onChange={this.onPasswordChange}
                value={this.props.password}
              />
            </div>
            <br />
            <div className="Auth__btns">
              <button className="btn btn__default">Войти</button>
              <Link className="btn btn__info_outline" to="/registration">
                Регистрация
              </Link>
            </div>
            <a className="Auth__forget-pass" href="/">
              Восстановить пароль
            </a>
          </form>
        </div>
      </div>
    );
  }
}
