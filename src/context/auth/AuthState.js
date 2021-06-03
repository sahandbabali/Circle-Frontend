import react, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // actions

  //load user
  const loaduser = () => {
    console.log("loaduser");
  };

  //register user
  const register = async (formdata) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formdata, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };

  //login user
  const loginuser = () => {
    console.log("loginuser");
  };
  //logout user
  const logoutuser = () => {
    console.log("logoutuser");
  };
  //clear errors
  const clearerrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loaduser,
        loginuser,
        logoutuser,
        clearerrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
