import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout_blogger } from "../Actions/LoginPageActions";

import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((state) => state.Login_blogger.user.isAuth);
  const firstName = useSelector((state) => state.Login_blogger.user.firstName);
  
  return (
    <>
      <div className="header">
        <div className="header-logo">TheDailyBlog</div>
        <div className="user-dp">
          {user ? (
            <div className="user-name">
              <div
                className="name-display"
                onClick={() => {
                  setDropDown((prev) => !prev);
                }}
              >
                {firstName}
              </div>
              <div className="dropDown-icon"   >
                {dropDown ? (
                  <i
                    class="fas fa-chevron-up"
                    onClick={() => {
                      setDropDown((prev) => !prev);
                    }}
                  ></i>
                ) : (
                  <i
                    class="fas fa-chevron-down"
                    onClick={() => {
                      setDropDown((prev) => !prev);
                    }}
                  ></i>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {dropDown ? (
        <div className="dropDown">
          <div
            className="dropDownOption"
            onClick={() => {
              setDropDown(false);
              dispatch(
                logout_blogger({
                  email: "",
                  firstName: "",
                  lastName: "",
                  isAuth: false,
                })
              );
              history.push("/");
            }}
          >
            Log-Out
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
