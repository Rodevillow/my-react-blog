import React from "react";
import { Link } from "react-router-dom";

import "../assets/scss/pages/forgerPassword.scss";

const ForgerPassword = () => {
    function onEmailChange(event) {
        console.log("-==-==-==-==-==-==-==-==-");
        console.log(event.target.value);
        console.log("-==-==-==-==-==-==-==-==-");
    }

    return (
        <div className="ForgerPassword">
            <div className="ForgerPassword-wrapper">
                <h3>Восстановление пароля</h3>
                <form>
                    <div>
                        <input
                            className="input input__default"
                            type="text"
                            name="email"
                            placeholder="Введите почту на которую зарегестрирован ваш аккаунт"
                            spellCheck={false}
                            onChange={onEmailChange}
                        />
                    </div>
                    <br />
                    <div className="ForgerPassword__btns">
                        <button className="btn btn__default">
                            Отправить письмо
                        </button>
                        <br />
                        <span className="small-text-bold ForgerPassword__text_info">
                            На указаный вами адрес электронной почты будет
                            отправленно письмо с ссылкой на восстановление
                            пароля
                        </span>
                        <br />
                        <Link className="btn btn__info_outline" to="/auth">
                            Авторизация
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgerPassword;
