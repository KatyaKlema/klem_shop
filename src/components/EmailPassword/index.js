import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AuthWrapper from "../AuthWrapper";
import "./styles.scss";
import FormInput from "../forms/FormInput";
import Button from "../forms/Button";
import { auth } from "../../firebase/utils";

const EmailPassword = (props) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        url: "http://localhost:3001/login",
      };
      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          props.history.push("/login");
        })
        .catch(() => {
          const errors = ["Email not found! Please try again"];
          setErrors(errors);
        });
    } catch (err) {}
  };

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
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <Button type="submit">Email Password</Button>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default withRouter(EmailPassword);
