import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../Reducers/reducer";



export const ContextGlobal = createContext(undefined);
const lsFavs = JSON.parse(localStorage.getItem('favs')) || [];
const initialState = {
  theme: false,
  favs: lsFavs,
  dentist: [],
}

export const ContextProvider = ({ children }) => {
  // const [theme, setTheme] = useState();
  // const [favs, setFavs] = useState(lsFavs);
  // const [dentist, setDentist] = useState([])
  const [state,dispatch] = useReducer(reducer,initialState)
  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>(
    axios(url).then(res => {
      dispatch({type: "GET_DENTIST", payload: res.data})
    })
  ),[]);
  
  useEffect(() =>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  },[state.favs]);
  
  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)