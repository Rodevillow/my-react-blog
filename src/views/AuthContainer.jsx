import React, { useState } from "react";
import { connect } from "react-redux";

import Auth from "../components/Auth";
import { asyncDoAuth } from "../store/auth/actions";

const AuthContainer = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onFormSubmitHandler() {
        console.log('.......................................');
        console.log('Отправить запрос на сервер...');
        console.log('Данные для отправки:');
        console.log(`Почта: ${email}`);
        console.log(`Пароль: ${password}`);
        console.log('Получить ответ от сервера и записать данные в store...');
        console.log('.......................................');

        props.asyncDoAuth(email, password)
    }

    return (
        <Auth
            email={email}
            password={password}
            setEmailText={setEmail}
            setPasswordText={setPassword}
            onFormSubmitHandler={onFormSubmitHandler}
        />
    );
}

// class AuthContainer extends React.Component {
//     render() {
//         return (
//             <Auth
//                 email={this.props.email}
//                 password={this.props.password}
//                 setEmailText={this.props.setEmailText}
//                 setPasswordText={this.props.setPasswordText}
//             />
//         );
//     }
// }

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
    };
};

const mapDispatchToProps = {
    asyncDoAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
