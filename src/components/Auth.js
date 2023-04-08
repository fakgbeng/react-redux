import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef, useState } from "react";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.auth.isAuthenticated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const emailHandler = () => {
    setEmail(emailRef.current.value);
  };
  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
  };
  const formHandler = (event) => {
    event.preventDefault();

    if (email.includes("@") && password.trim().length > 5) {
      dispatch(authActions.login());
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              onChange={emailHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordHandler}
              ref={passwordRef}
            />
          </div>

          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
