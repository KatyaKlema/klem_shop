import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./../forms/Button";
import { auth, signInWithGoogle } from "../../firebase/utils";
import FormInput from "../forms/FormInput";
import "./styles.scss";
import AuthWrapper from "../AuthWrapper";

const initialState = {
  email: "",
  password: "",
  error: "",
};
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ ...initialState });
    } catch (err) {
      this.setState({ error: err.message });
      console.log(err);
    }
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, error } = this.state;

    const configAuthWrapper = {
      headline: "LogIn",
    };
    return (
      <AuthWrapper {...configAuthWrapper}>
        {error}
        <div className="formWrap">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange}
            />

            <Button type="submit">LogIn</Button>

            <div className="socialSignIn">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
            </div>

            <div className="links">
              <Link to="/recovery">Reset Password</Link>
            </div>
          </form>
        </div>
      </AuthWrapper>
    );
  }
}
export default SignIn;
