import React, { useState } from "react";
import { connect } from "react-redux";

import Auth from "../components/Auth";
import { asyncDoAuth } from "../store/auth/actions";

const AuthContainer = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onFormSubmitHandler() {
        props.asyncDoAuth(email, password);
    }

    return (
        <Auth
            errors={props.errors}
            email={email}
            password={password}
            setEmailText={setEmail}
            setPasswordText={setPassword}
            onFormSubmitHandler={onFormSubmitHandler}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        errors: state.auth.errors,
    };
};

const mapDispatchToProps = {
    asyncDoAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
