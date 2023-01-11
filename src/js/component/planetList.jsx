import React, { useContext, useEffect, useState } from "react";
import PlanetCard from "./planetCard.jsx";

const PlanetList = () => {

  let [planetData, setPlanetData] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
				.then(response => response.json())
				.then(data => {
          data.results.map(e => e.favorite = false)
          setPlanetData(data.results);
          setLoading(false);
        });
  }, [])

  //people map
  const planetMap = planetData.map((planet, index) => {
    return <PlanetCard
    planetUrl={planet.url}
    index={index}
    key={index+1}
    planetUid={index+1}
    />;
  });

  if (loading) return <div className="p-2 w-100">
    <h1>Planets</h1>
    <div className="listBox d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  </div>

  return (
    <div className="p-2 w-100">
      <h1>Planets ({planetData.length})</h1>
      <ul className="wrapper listBox">{planetMap}</ul>
    </div>
  );
};

export default PlanetList;
