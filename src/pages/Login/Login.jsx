import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const isValid =
    userInput.email.includes("@") && userInput.password.length > 5;

  const updateUserInput = (e) => {
    const type = e.target?.dataset?.type;
    setUserInput((prevInput) => ({ ...prevInput, [type]: e.target.value }));
  };

  function goToMain(e) {
    e.preventDefault();
    isValid && navigate("/");
  }

  return (
    <section className="login__box">
      <h2 className="login-title">Westagram</h2>
      <form className="login__form" onSubmit={goToMain}>
        <input
          type="text"
          value={userInput["email"]}
          data-type="email"
          onInput={updateUserInput}
          placeholder="ID"
        />
        <input
          type="password"
          value={userInput.password}
          data-type="password"
          onInput={updateUserInput}
          placeholder="password"
        />
        <button className={`login__btn ${isValid && "active"}`}>로그인</button>
      </form>
    </section>
  );
};

export default Login;
