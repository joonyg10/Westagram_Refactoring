import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const isValid =
    userInput.email.includes("@") && userInput.password.length > 5;

  const handleUserInput = (e) => {
    const type = e.target?.dataset?.type;
    setUserInput((prevInput) => ({ ...prevInput, [type]: e.target.value }));
  };

  const goToMain = () => navigate("/main");
  const goToMainByEnter = (e) => {
    if (e.key === "Enter") goToMain();
  };

  return (
    <section className="login__box">
      <h2> Westagram</h2>
      <form className="login__form">
        <input type="text" data-type="email" onChange={handleUserInput} />
        <input
          type="password"
          data-type="password"
          onChange={handleUserInput}
        />
        <button className={`login__btn ${isValid && "active"}`}>로그인</button>
      </form>
      <div className="divider">
        <spa>또는</spa>
      </div>
    </section>
  );
};

export default Login;
