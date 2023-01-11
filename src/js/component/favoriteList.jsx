import React, { useContext } from "react";
import FavoriteElement from "./favoriteElement.jsx";
import { Context } from "../store/appContext.js";

const FavoriteList = (props) => {

  const {store , actions} = useContext(Context)

  const favoriteMap = store.favorites.map((favorite,index)=>{
    return <FavoriteElement favorite={favorite} index={index} key={index}/>
  })

  return (
    <div className="dropdown">
      <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Favorites <span className="badge text-bg-secondary">{store.favorites.length}</span>
      </a>

      <ul className="dropdown-menu">
        {favoriteMap}
      </ul>
    </div>
  );
};

export default FavoriteList;
