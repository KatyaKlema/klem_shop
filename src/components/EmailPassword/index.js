import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthWrapper from "../AuthWrapper";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import { auth } from "../../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};
class EmailPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email } = this.state;
      const config = {
        url: "http://localhost:3001/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const errors = ["Email not found! Please try again"];
          this.setState({
            errors,
          });
        });
    } catch (err) {}
  };
  render() {
    const { email, errors } = this.state;
    const configAuthWrapper = { headline: "Email Password" };
    return (
      <AuthWrapper {...configAuthWrapper}>
        <div className="formWrap">
          {errors.length > 0 && (
            <ul>
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          )}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />

            <Button type="submit">Email Password</Button>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}

export default withRouter(EmailPassword);
