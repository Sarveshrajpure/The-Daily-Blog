import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { set_blogger } from "../../Actions/LoginPageActions";
import "./LoginForm.css";
const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.Login_blogger.user.isAuth);
  const PrimaryEmail = "sarvesh@gmail.com";
  const PrimaryPassword = "sarvesh123";
  const [formInfo, setFormInfo] = useState({ userEmail: "", userPassword: "" });
  const [error, setError] = useState({ emailError: "", passwordError: "" });
  useEffect(() => {
    if (isAuth) {
      history.push("/createBlog");
    }
  }, [isAuth, history]);
  const validateEmail = (val) => {
    setFormInfo((prev) => {
      return { ...prev, userEmail: val };
    });

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (val.length > 6) {
      if (regex.test(val.toString().toLowerCase())) {
        setError((prev) => {
          return { ...prev, emailError: "" };
        });
        setFormInfo((prev) => {
          return { ...prev, userEmail: val };
        });
      } else {
        setError((prev) => {
          return { ...prev, emailError: "*Please enter a valid email*" };
        });
      }
    }
  };
  const handleLoginBtn = () => {
    if (isAuth) {
      history.push("/createBlog");
    } else {
    }
  };
  const validate = () => {
    if (formInfo.userEmail === PrimaryEmail) {
      setError((prev) => {
        return { ...prev, emailError: "" };
      });
    } else {
      setError((prev) => {
        return { ...prev, emailError: "*Please enter a valid email*" };
      });
      dispatch(
        set_blogger({
          email: "",
          firstName: "",
          lastName: "",
          isAuth: false,
        })
      );
    }
    if (error.emailError === "") {
      if (formInfo.userPassword === PrimaryPassword) {
        dispatch(
          set_blogger({
            email: "sarvesh@gmail.com",
            firstName: "Sarvesh",
            lastName: "Rajpure",
            isAuth: true,
          })
        );
        history.push("/createBlog");
      } else {
        setError((prev) => {
          return { ...prev, passwordError: "*Incorrect password*" };
        });
        dispatch(
          set_blogger({
            email: "",
            firstName: "",
            lastName: "",
            isAuth: false,
          })
        );
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-content">
        <div className="login-form-welcome-message-wrapper">
          <div className="title">
            Welcome<span className="title-exclamation">!</span>
          </div>
          <p className="description">
            Enter your details and start your blogging journey.
          </p>
        </div>

        <div className="login-form-fields-wrapper">
          <div className="title">Login Please</div>

          <input
            type="text"
            className="userName-inputfield"
            placeholder="Enter your user name"
            value={formInfo.userEmail}
            onChange={(e) => {
              validateEmail(e.target.value);
            }}
          />
          <div className="errorDisplay">
            {error.emailError ? error.emailError : null}
          </div>
          <input
            type="password"
            className="password-inputfield"
            placeholder="Enter your password"
            onChange={(e) => {
              setFormInfo((prev) => {
                return { ...prev, userPassword: e.target.value };
              });
            }}
          />
          <div className="errorDisplay">
            {error.passwordError ? error.passwordError : null}
          </div>
          <div
            style={{ textDecoration: "none" }}
            className="LoginBtn"
            onClick={() => {
              validate();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
