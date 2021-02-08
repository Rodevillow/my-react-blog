import React from "react";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
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
      <div className="Registration-wrapper">
        <h3>Registration form...</h3>
        <form>
          <div>
            <input
              type="text"
              name="login"
              placeholder="E-mail"
              spellCheck={false}
              onChange={this.onEmailChange}
              value={this.props.email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
              value={this.props.password}
            />
          </div>
          <div>
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              onChange={this.onRepeatPasswordChange}
              value={this.props.repeatPassword}
            />
          </div>
        </form>
      </div>
    );
  }
}