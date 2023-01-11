import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

const PeopleCard = (props) => {
    
    const {store , actions} = useContext(Context)
    const navigate = useNavigate();
    let [characterInfo, setCharacterInfo] = useState({});
    let [loading, setLoading] = useState(true);
    let [isFavorite, setIsFavorite] = useState(<i className="fa-regular fa-heart"></i>)

    useEffect(() => {
      fetch(props.personUrl)
      .then(response => response.json())
      .then(data => {
        setCharacterInfo(data.result.properties);
        setLoading(false);
      })
    }, [])

    useEffect(() => {
      store.favorites.includes(characterInfo.name) ? setIsFavorite(<i className="fa-solid fa-heart"></i>) : setIsFavorite(<i className="fa-regular fa-heart"></i>);
    }, [store.favorites])

    const handleFavorite = async (event) => {

      event.preventDefault()

      actions.addFavorite(characterInfo.name)
    }

    if(loading) return <li className="swiper-slide">
      <div className="card characterCard m-2" aria-hidden="true">
        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <div className="d-flex justify-content-between">
            <button tabIndex="-1" className="btn btn-outline-primary disabled placeholder col-4"></button>
            <button tabIndex="-1" className="btn btn-outline-danger disabled placeholder col-2"></button>
          </div>
        </div>
      </div>
    </li>;

    return (
    <li className="swiper-slide">
      <div className="card characterCard m-2">
        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* Place name here */}
          <h5 className="card-title">{characterInfo.name}</h5>
          {/* Place fetched data here */}
          <div className="mb-3">
            <p className="m-0">Gender: {characterInfo.gender}</p>
            <p className="m-0">Hair color: {characterInfo.hair_color}</p>
            <p className="m-0">Eyes color: {characterInfo.eye_color}</p>
          </div>
          {/* Buttons here */}
          <div className="d-flex justify-content-between">
            <button id={props.index} onClick={() => navigate(`/persondetail/${props.personUid}`)} type="button" className="btn btn-outline-primary col-4">Learn more</button>
            <button id={props.index} onClick={handleFavorite} type="button" className="btn btn-outline-danger col-2">{isFavorite}</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PeopleCard;
