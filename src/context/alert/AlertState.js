import react, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import { v4 as uuidv4 } from "uuid";

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // actions

  //set alert
  const setalert = (msg, type) => {
    const id = uuidv4();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setalert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
