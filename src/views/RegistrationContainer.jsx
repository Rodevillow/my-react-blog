import React, { useState } from "react";
import { connect } from "react-redux";

import Registration from "../components/Registration";

import { asyncDoRegistration } from "../store/registration/actions"


const RegistrationContainer = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function onFormSubmitHandler() {
        props.asyncDoRegistration(name, email, password, repeatPassword);
    }

    return (
        <Registration
            name={name}
            email={email}
            password={password}
            repeatPassword={repeatPassword}
            setNameText={setName}
            setEmailText={setEmail}
            setPasswordText={setPassword}
            setRepeatPasswordText={setRepeatPassword}
            onFormSubmitHandler={onFormSubmitHandler}
        />
    )
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = {
    asyncDoRegistration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)