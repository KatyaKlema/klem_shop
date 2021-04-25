import { auth } from "../../firebase/utils";
import userTypes from "./types";

export const handleResetPasswordAPI = (email) => {
  return new Promise((resolve, reject) => {
    const config = {
      url: "http://localhost:3001/login",
    };
    auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const errors = ["Email not found! Please try again"];
        reject(errors);
      });
  });
};
