import React from "react";
import PeopleCard from "./personCard.jsx";

const PeopleList = (props) => {
  //people map
  const peopleMap = props.peopleData.map((person) => {
    return <PeopleCard key={person.uid} />;
  });

  return (
    <div>
      <h1>Characters</h1>
      <ul>{peopleMap}</ul>
    </div>
  );
};

export default PeopleList;
