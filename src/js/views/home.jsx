import React from "react";
import "../../styles/home.css";

//Import components
import PeopleList from "../component/peopleList.jsx"
import PlanetList from "../component/planetList.jsx";


const Home = () => {
	
	return(
		<div className="container-sm">
			<PeopleList/>
			<PlanetList/>
		</div>
	)

}

export default Home;