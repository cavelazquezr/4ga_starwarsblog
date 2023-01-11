import React, { useContext, useEffect, useState } from "react";
import PeopleCard from "./personCard.jsx";

const PeopleList = () => {

  let [peopleData, setPeopleData] = useState([])
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
				.then(response => response.json())
				.then(data => {
          data.results.map(e => e.favorite = false)
          setPeopleData(data.results);
          setLoading(false);
        });
  }, [])

  //people map
  const peopleMap = peopleData.map((person, index) => {
    return <PeopleCard
    personUrl={person.url}
    index={index}
    key={person.uid}
    personUid={person.uid}
    personName={person.name}
    />;
  });

  if (loading) return <div className="p-2 w-100">
    <h1>Characters</h1>
    <div className="listBox d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
    </div>
  </div>

  return (
    <div className="p-2 w-100">
      <h1>Characters ({peopleData.length})</h1>
      <ul className="wrapper listBox">{peopleMap}</ul>
    </div>
  );
};

export default PeopleList;
