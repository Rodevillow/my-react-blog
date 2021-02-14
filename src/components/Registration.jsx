import React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/pages/signUp.scss";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
  }

  onNameChange(event) {
    this.props.setNameText(event.target.value);
  }

  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  onRepeatPasswordChange(event) {
    this.props.setRepeatPasswordText(event.target.value);
  }

  render() {
    return (
      <div className="Registration">
        <div className="Registration-wrapper">
          <h3>Регистрация</h3>
          <form>
            <div>
              <input
                className="input input__default"
                type="text"
                name="name"
                placeholder="Введите имя"
                spellCheck={false}
                onChange={this.onNameChange}
                value={this.props.name}
              />
            </div>
            <br />
            <div>
              <input
                className="input input__default"
                type="text"
                name="email"
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
            <div>
              <input
                className="input input__default"
                type="password"
                name="repeatPassword"
                placeholder="Введите повторно пароль"
                onChange={this.onRepeatPasswordChange}
                value={this.props.repeatPassword}
              />
            </div>
            <br />
            <div className="Auth__btns">
              <Link className="btn btn__info_outline" to="/auth">
                Авторизация
              </Link>
              <button className="btn btn__default">Зарегестрироваться</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
