import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const RouteGuard = (ComposedComponent) => {
  const AuthenticationCheck = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const userAuth = useSelector((state) => state.Login_blogger.user.isAuth);
    useEffect(() => {
      if (userAuth) {
        setIsAuth(true);
      } else {
        props.history.push("/");
      }
    }, [props, userAuth]);

    if (!isAuth) {
      return <div>loading</div>;
    } else {
      return <ComposedComponent authorized={isAuth} />;
    }
  };
  return AuthenticationCheck;
};
export default RouteGuard;
