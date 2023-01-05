import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import {getPeople} from "../service/getPeople.js"
import {getPlanets} from "../service/getPlanets.js"
import PeopleList from "../component/peopleList.jsx"
import PlanetList from "../component/planetList.jsx";


const Home = (props) => {

	//states
	const [peopleData, setPeopleData] = useState([])
	const [planetsData, setPlanetsData] = useState([])

	//getting people and planets by fetch
	useEffect(()=>{
		getPeople().then((data) => setPeopleData(data.results));
		getPlanets().then((data) => setPlanetsData(data.results));
	},[])

	return(
		<div className="container-sm">
			<PeopleList peopleData={peopleData} addFavorite={props.addFavorite}/>
			<PlanetList planetsData={planetsData} addFavorite={props.addFavorite}/>
		</div>
	)

}

export default Home;