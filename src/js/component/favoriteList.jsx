import React from "react";
import FavoriteElement from "./favoriteElement.jsx";

const FavoriteList = (props) => {

  const favoriteMap = props.favorites.map((favorite,index)=>{
    return <FavoriteElement favorite={favorite} index={index} key={index} removeFavorite={props.removeFavorite}/>
  })

  return (
    <div className="dropdown">
      <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Favorites <span className="badge text-bg-secondary">{props.favorites.length}</span>
      </a>

      <ul className="dropdown-menu">
        {favoriteMap}
      </ul>
    </div>
  );
};

export default FavoriteList;
