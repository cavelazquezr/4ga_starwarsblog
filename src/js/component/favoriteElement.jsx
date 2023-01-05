import React from "react";

const FavoriteElement = (props) => {

    const handleRemove = (event) => {
        props.removeFavorite(event.target.id);
    }

    return <li className="dropdown-item w-100 d-flex justify-content-between align-middle">{props.favorite} <button onClick={handleRemove} id={props.index} type="button" className="btn-close" aria-label="Close"></button></li>
}

export default FavoriteElement;