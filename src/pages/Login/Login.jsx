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

  function goToMain() {
    isValid && navigate("/main");
  }

  function goToMainByEnter(e) {
    e.preventDefault();
    if (e.key === "Enter") goToMain();
  }

  return (
    <section className="login__box">
      <h2 className="login-title"> Westagram</h2>
      <form className="login__form" onKeyPress={goToMainByEnter}>
        <input type="text" data-type="email" onChange={updateUserInput} />
        <input
          type="password"
          data-type="password"
          onChange={updateUserInput}
        />
        <button className={`login__btn ${isValid && "active"}`}>로그인</button>
      </form>
      <div className="divider">
        <span>또는</span>
      </div>
    </section>
  );
};

export default Login;
