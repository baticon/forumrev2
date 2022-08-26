import { useMutation } from "@apollo/client";
import { useState } from "react";
import { QUERY_TO_LOGIN } from "../query/signIn";
import style from "./login.module.css";

const LoginnPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [createUser, { loading, error }] = useMutation(QUERY_TO_LOGIN);
  if (error) {
    alert(error);
  }

  return (
    <div className={style.RegistrationPage}>
      <div className={style.regFormDiv}>
        <p className={style.title}>Login</p>
        {loading && <div className={style.loading}></div>}
        <form className={style.regForm}>
          <input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              createUser({
                variables: {
                  email: email,
                  password: password,
                },
              }).then(({ data }) => {
                if (data.login.token) {
                  sessionStorage.setItem("ACCESS_TOKEN", data.login.token);
                  window.location = "/";
                }
              });
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginnPage;
