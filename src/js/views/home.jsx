import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import {getPeople} from "../service/getPeople.js"
import {getPlanets} from "../service/getPlanets.js"
import PeopleList from "../component/peopleList.jsx"


const Home = () => {

	//states
	const [peopleData, setPeopleData] = useState([])
	const [planetsData, setPlanetsData] = useState([])

	//getting people and planets by fetch
	useEffect(()=>{
		getPeople().then((data) => setPeopleData(data.results));
		getPlanets().then((data) => setPlanetsData(data.results));
	},[])

	return(

		<PeopleList peopleData={peopleData}/>
	)

}

export default Home;