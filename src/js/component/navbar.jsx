import React from "react";
import { Link } from "react-router-dom";
import FavoriteList from "./favoriteList.jsx";

export const Navbar = (props) => {


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-sm d-flex justify-content-between">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" className="nav-logo" alt="logo" />
				</Link>
				<FavoriteList favorites={props.favorites} removeFavorite={props.removeFavorite}/>
			</div>
		</nav>
	);
};
