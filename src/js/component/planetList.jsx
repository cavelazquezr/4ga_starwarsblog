import React from "react";
import PlanetCard from "./planetCard.jsx";

const PlanetList = (props) => {
  //people map
  const planetsMap = props.planetsData.map((planet, index) => {
    return <PlanetCard
    index={index}
    key={planet.uid}
    planetUid={planet.uid}
    planetName={planet.name}
    addFavorite={props.addFavorite}
    planetsData={props.planetsData}/>;
  });

  return (
    <div className="p-2 w-100">
      <h1>Planets ({props.planetsData.length})</h1>
      <ul className="wrapper">{planetsMap}</ul>
    </div>
  );
};

export default PlanetList;
