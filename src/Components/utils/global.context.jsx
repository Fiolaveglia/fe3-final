import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

export const initialState = {
  theme: " ", 
  data: [], 
  favoritos: JSON.parse(localStorage.getItem("favoritos")) || []
}

export const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch (action.type) {
      case "SET_THEME":
          return { ...state, theme: action.payload };
      case "SET_DATA":
          return { ...state, data: action.payload };
      case 'ADD_FAV':
          const nuevoFavorito = [...state.favoritos, action.payload];
          localStorage.setItem('favs', JSON.stringify(nuevoFavorito));
          return { ...state, favoritos: nuevoFavorito };    
      default:
          return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users"
  
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
        dispatch({type: 'SET_THEME', payload: state.theme === "" ? "dark" : ""})
      }
    }), [state]);

      return (
        <ContextGlobal.Provider value={value}>
          {children}
        </ContextGlobal.Provider>
    );
};
