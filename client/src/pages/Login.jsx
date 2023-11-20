import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-main">
        <div className="login-container">
          <h1>Log in</h1>
          <form className="login-form" action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
          <a href="">Forgot password?</a>
        </div>
      </div>
    </>
  );
};

export default Login;
