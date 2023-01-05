import React, { useState } from "react";
import { getPerson } from "../service/getPeople.js";

const PlanetCard = (props) => {
    
    const [personData, setPersonData] = useState({})

    //fetch for person information
    // getPerson(`https://www.swapi.tech/api/people/${props.personUid}`).then((data)=>setPersonData(data.result))

    const handleFavorite = (event) => {
      props.addFavorite(props.planetsData[event.target.id]["name"])
    }

    return (
    <li className="swiper-slide">
      <div className="card characterCard m-2">
        <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          {/* Place name here */}
          <h5 className="card-title">{props.planetName}</h5>
          {/* Place fetched data here */}
          <div className="mb-3">
            <p className="m-0">Gender: place gender</p>
            <p className="m-0">Hair color: place hair color</p>
            <p className="m-0">Eyes color: place eyes color</p>
          </div>
          {/* Buttons here */}
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-outline-primary">Learn more</button>
            <button id={props.index} onClick={handleFavorite} type="button" className="btn btn-outline-danger"><i className="fa-regular fa-heart"></i></button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PlanetCard;
