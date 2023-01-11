import React, { useContext } from "react";
import { Context } from "../store/appContext";

const FavoriteElement = (props) => {

    const {store, actions} = useContext(Context);

    const handleRemove = (event) => {
        actions.removeFavorite(event.target.id);
    }

    return <li className="dropdown-item w-100 d-flex justify-content-between align-middle">{props.favorite} <button onClick={handleRemove} id={props.index} type="button" className="btn-close" aria-label="Close"></button></li>
}

export default FavoriteElement;