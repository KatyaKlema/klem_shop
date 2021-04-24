import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "./../forms/Button";
import { auth, signInWithGoogle } from "../../firebase/utils";
import FormInput from "../forms/FormInput";
import AuthWrapper from "../AuthWrapper";
import "./styles.scss";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
      props.history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const configAuthWrapper = {
    headline: "LogIn",
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      {error}
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
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
};
export default withRouter(SignIn);
