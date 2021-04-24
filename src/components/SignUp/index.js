import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import { auth, handleUserProfile } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import "./styles.scss";
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const resetState = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Passwords do not match"];
      setErrors(err);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });
      resetState();
      props.history.push("/");
    } catch (err) {
      this.setState({ errors: [err.message] });
    }
  };

  const configAuthWrapper = {
    headline: "Registration",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => (
              <li key={index}> {err} </li>
            ))}
          </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(event) => {
              setDisplayName(event.target.value);
            }}
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(event) => setEmail(event.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(event) => setPassword(event.target.value)}
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm password"
            handleChange={(event) => setConfirmPassword(event.target.value)}
          />

          <Button type="submit">Register</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(SignUp);
