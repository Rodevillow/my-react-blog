import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchErrorByName } from "../helpers/index";
import { validation } from "../helpers/formValidator";

// import logoSvg from "../assets/images/svg/logo.svg";
import "../assets/scss/pages/signIn.scss";

const Auth = (props) => {

    const [emailIsDirty, setEmailIsDirty] = useState(false)
    const [passwordIsDirty, setPasswordIsDirty] = useState(false)

    const emailError = showErrors("email");
    const passwordError = showErrors("password");

    // ---------------------------------------------------------
    // Validation
    // ---------------------------------------------------------

    function emailValidation() {

        if (emailIsDirty) {
            let error = validation(
                props.email,
                {
                    isRequired: true,
                    isEmail: true,
                    maxLength: 80
                }, 'E-mail')
            return error ? error : 0
        }

        return -1
    }

    function passwordValidation() {

        if (passwordIsDirty) {
            let error = validation(
                props.password,
                {
                    minLength: 6,
                    maxLength: 32
                }, 'Пароль')
            return error ? error : 0
        }

        return -1
    }

    function formIsValid() {
        return (emailValidation() === 0 && passwordValidation() === 0)
    }

    // ---------------------------------------------------------
    // End validation
    // ---------------------------------------------------------

    function onFormSubmit(event) {
        event.preventDefault()

        setEmailIsDirty(true)
        setPasswordIsDirty(true)

        if (formIsValid()) {
            props.onFormSubmitHandler()
        }
    }

    function onEmailChange(event) {
        setEmailIsDirty(true)
        props.setEmailText(() => event.target.value);
    }

    function onPasswordChange(event) {
        setPasswordIsDirty(true)
        props.setPasswordText(() => event.target.value);
    }

    function showErrors(name) {
        if (!props.errors) return null;

        const errors = props.errors.filter((error) => error.param === name);

        return errors.length > 0 ? errors[0].msg : errors;
    }

    return (
        <div className="Auth">
            <div className="Auth-wrapper">
                {/* <img className="Auth__logo big-icon" src={logoSvg} alt="Big Logo" /> */}
                <h3>Авторизация</h3>
                <form onSubmit={onFormSubmit}>
                    <div>
                        <input
                            className={
                                'input input__default' + 
                                ((emailValidation() !== -1 && emailValidation() !== 0) ? ' input__error' : '') +
                                ((emailValidation() === 0) ? ' input__success' : '')
                            }
                            type="text"
                            name="login"
                            placeholder="Введите почту"
                            spellCheck={false}
                            onChange={onEmailChange}
                            value={props.email}
                            onBlur={setEmailIsDirty}
                        />
                        {emailValidation() !== -1 && emailValidation() !== 0 && (
                            <span className="message message__error">
                                {emailValidation()}
                            </span>
                        )}
                        {emailError && (
                            <span className="message message__error">
                                {emailError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div>
                        <input
                            className={
                                'input input__default' + 
                                ((passwordValidation() !== -1 && passwordValidation() !== 0) ? ' input__error' : '') +
                                ((passwordValidation() === 0) ? ' input__success' : '')
                            }
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                            onChange={onPasswordChange}
                            value={props.password}
                            onBlur={setPasswordIsDirty}
                        />
                        {passwordValidation() !== -1 && passwordValidation() !== 0 && (
                            <span className="message message__error">
                                {passwordValidation()}
                            </span>
                        )}
                        {passwordError && (
                            <span className="message message__error">
                                {passwordError}
                            </span>
                        )}
                    </div>
                    <br />
                    <div className="Auth__btns">
                        <button 
                            disabled={formIsValid ? 'enabled' : 'disabled'} 
                            className={"btn btn__default " + (formIsValid() ? "" : "btn__disabled")}>
                            Войти
                        </button>
                        <Link
                            className="btn btn__info_outline"
                            to="/registration"
                        >
                            Регистрация
                        </Link>
                    </div>
                    <Link className="Auth__forget-pass" to="/forget_password">
                        Восстановить пароль
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Auth;
