import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";


const Card = ({dentist}) => {
  const { state, dispatch } = useContextGlobal();
  const isFav = state.favs.find((fav) => fav.id == dentist.id)
  const addFav = ()=>{
      // setFavs((favs) => [...favs, dentist])
      dispatch({type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist})
      // if (isFav){
      //   dispatch({type:"REMOVE_FAV",payload: dentist})
      // } else {
      // dispatch({type:"ADD_FAV", payload:dentist});
      }
  return (
    <div className="card">
        <Link to ={"/dentist/" + dentist.id}>
          <img src ="./images/doctor.jpg" alt={dentist.name}></img>
          <h2 style={{textAlign: "center"}} className="h2Card">{dentist.name}</h2>
          <h3 style={{fontSize: "5 px", textAlign: "center", fontWeight : "normal"}}className="h3Card">{dentist.username}</h3>
        </Link>
        <button onClick={addFav} className="favButton">{isFav ? '🌟':'⭐'} </button>
    </div>
  );
};

export default Card;
