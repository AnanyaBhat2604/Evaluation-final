import LeftLock from "../../components/login/leftLock/leftLock";
import Login from "../../components/login/loginForm/login";
import SignUp from "../../components/signUp/signUp";
import "./landingPage.css";
import { useState, useEffect } from "react";
import Toast from "../../components/toast/toast";

const LandingPage = () => {
  const [displayToast, setDisplayToast] = useState(false);

  useEffect(() => {
    setDisplayToast(Boolean(sessionStorage.getItem("signUpSuccess")));
    sessionStorage.removeItem("signUpSuccess");
  }, []);

  setInterval(() => {
    setDisplayToast(false);
  }, 3000);
  return (
    <div className="container">
      {displayToast ? <Toast /> : ""}
      <div className="landingPage">
        <div className="lockContainer">
          <LeftLock />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
