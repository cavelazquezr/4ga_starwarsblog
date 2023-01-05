import React from "react";
import PeopleCard from "./personCard.jsx";

const PeopleList = (props) => {
  //people map
  const peopleMap = props.peopleData.map((person, index) => {
    return <PeopleCard
    peopleData={props.peopleData}
    index={index}
    key={person.uid}
    personUid={person.uid}
    personName={person.name}
    addFavorite={props.addFavorite}/>;
  });

  return (
    <div className="p-2 w-100">
      <h1>Characters ({props.peopleData.length})</h1>
      <ul className="wrapper">{peopleMap}</ul>
    </div>
  );
};

export default PeopleList;
