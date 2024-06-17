import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

export const initialState = {theme: " ", data: []}

export const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch (action.type) {
      case "SET_THEME":
          return { ...state, theme: action.payload };
      case "SET_DATA":
          return { ...state, data: action.payload };
      default:
          return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users"
  
  //console.log(state)

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                dispatch({ type: "SET_DATA", payload: response.data });
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const value = useMemo(() => ( { 
      state, 
      dispatch, 
      toggleTheme: () => { 
        dispatch({type: 'SET_THEME', payload: state.theme === '' ? "dark" : " "})
      }
    }), [state]);

      return (
        <ContextGlobal.Provider value={value}>
          {children}
        </ContextGlobal.Provider>
    );
};
