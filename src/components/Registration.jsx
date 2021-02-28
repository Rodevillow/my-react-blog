import React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/pages/signUp.scss";

const Registration = (props) => {
    const nameError = showErrors("name");
    const emailError = showErrors("email");
    const passwordError = showErrors("password");
    const passwordConfirmationError = showErrors("password_confirmation");

    function onNameChange(event) {
        props.setNameText(event.target.value);
    }

    function onEmailChange(event) {
        props.setEmailText(event.target.value);
    }

    function onPasswordChange(event) {
        props.setPasswordText(event.target.value);
    }

    function onRepeatPasswordChange(event) {
        props.setRepeatPasswordText(event.target.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        props.onFormSubmitHandler();
    }

    function showErrors(name) {
        if (!props.errors) return null;

        const errors = props.errors.filter((error) => error.param === name);

        return errors.length > 0 ? errors[0].msg : errors;
    }

    return (
        <div className="Registration">
            <div className="Registration-wrapper">
                <h3>Регистрация</h3>
                <form onSubmit={onFormSubmit}>
                    <div>
                        <input
                            className="input input__default"
                            type="text"
                            name="name"
                            placeholder="Введите имя"
                            spellCheck={false}
                            onChange={onNameChange}
                            value={props.name}
                        />
                        {nameError && (
                            <span className="message message__error">
                                {nameError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div>
                        <input
                            className="input input__default"
                            type="text"
                            name="email"
                            placeholder="Введите почту"
                            spellCheck={false}
                            onChange={onEmailChange}
                            value={props.email}
                        />
                        {emailError && (
                            <span className="message message__error">
                                {emailError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div>
                        <input
                            className="input input__default"
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            onChange={onPasswordChange}
                            value={props.password}
                        />
                        {passwordError && (
                            <span className="message message__error">
                                {passwordError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div>
                        <input
                            className="input input__default"
                            type="password"
                            name="repeatPassword"
                            placeholder="Введите повторно пароль"
                            onChange={onRepeatPasswordChange}
                            value={props.repeatPassword}
                        />
                        {passwordConfirmationError && (
                            <span className="message message__error">
                                {passwordConfirmationError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div className="Auth__btns">
                        <button className="btn btn__default">
                            Зарегестрироваться
                        </button>
                        <Link className="btn btn__info_outline" to="/auth">
                            Авторизация
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
