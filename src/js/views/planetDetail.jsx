import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';

const PlanetDetail = () => {

    const [planetInfo, setPlanetInfo] = useState({})
    let [loading, setLoading] = useState(true)

    let viewPlanet = useParams();
    
    useEffect(() => {
      fetch(`https://swapi.dev/api/planets/${viewPlanet.id}`)
      .then(response => response.json())
      .then(data => {
        setPlanetInfo(data);
        setLoading(false);
      })
    }, [])

    if(loading) return <div className="container-sm">
    <div className="row">
        <div className="col-6 p-0">
            <img src="https://via.placeholder.com/800x600" className="card-img-top" alt="..." />
        </div>
        <div className="col-6 pe-0">
            <p className="card-text placeholder-glow">
              <span className="placeholder placeholder-lg col-10"></span>
            </p>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
        </div>
    </div>
    <div className="row mt-3">
      <p className="card-text placeholder-glow p-0">
        <span className="placeholder placeholder-lg col-2"></span>
      </p>
      <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
              <th scope="col-2">
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
              <td>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-10"></span>
                </p>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
</div>;

    return(
        <div className="container-sm">
            <div className="row">
                <div className="col-6 p-0">
                    <img src="https://via.placeholder.com/800x600" className="card-img-top" alt="..." />
                </div>
                <div className="col-6 pe-0">
                    <h1>{planetInfo.name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut incidunt maiores architecto voluptates quod sunt. Corporis voluptate esse iure eaque! Consequuntur corrupti at corporis commodi a, nesciunt minima deserunt animi.</p>
                </div>
            </div>
            <div className="row mt-3">
              <h3 className="p-0" >Planet information:</h3>
              <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col-2">Name</th>
                      <th scope="col-2">Climate</th>
                      <th scope="col-2">Population</th>
                      <th scope="col-2">Orbital Period</th>
                      <th scope="col-2">Rotation Period</th>
                      <th scope="col-2">Diameter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{planetInfo.name}</td>
                      <td>{planetInfo.climate}</td>
                      <td>{planetInfo.population}</td>
                      <td>{planetInfo.orbital_period}</td>
                      <td>{planetInfo.rotation_period}</td>
                      <td>{planetInfo.diameter}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
        </div>
    )
};

export default PlanetDetail;