import React from "react";
import { connect } from "react-redux";

import Registration from "../components/Registration";
import { setNameText, setEmailText, setPasswordText, setRepeatPasswordText } from '../store/registration/actions';

class RegistrationContainer extends React.Component {
  render() {
    return (
        <Registration
            name={this.props.name}
            email={this.props.email}
            password={this.props.password}
            repeatPassword={this.props.repeatPassword}
            setNameText={this.props.setNameText}
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}
            setRepeatPasswordText={this.props.setRepeatPasswordText}
        />
    );
  }
}

const mapStateToProps = state => {
    return {
        name: state.registration.name,
        email: state.registration.email,
        password: state.registration.password,
        repeatPassword: state.registration.repeatPassword
    };
}

const mapDispatchToProps = {
    setNameText,
    setEmailText,
    setPasswordText,
    setRepeatPasswordText
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)