import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from 'react-router-dom';

const PersonDetail = () => {

    const [characterInfo, setCharacterInfo] = useState({})
    let [loading, setLoading] = useState(true)

    let viewPerson = useParams();
    
    useEffect(() => {
      fetch(`https://www.swapi.tech/api/people/${viewPerson.id}`)
      .then(response => response.json())
      .then(data => {
        setCharacterInfo(data.result.properties);
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
                    <h1>{characterInfo.name}</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut incidunt maiores architecto voluptates quod sunt. Corporis voluptate esse iure eaque! Consequuntur corrupti at corporis commodi a, nesciunt minima deserunt animi.</p>
                </div>
            </div>
            <div className="row mt-3">
              <h3 className="p-0" >Character information:</h3>
              <table className="table mt-3">
                  <thead>
                    <tr>
                      <th scope="col-2">Name</th>
                      <th scope="col-2">Birth Year</th>
                      <th scope="col-2">Gender</th>
                      <th scope="col-2">Height</th>
                      <th scope="col-2">Skin Color</th>
                      <th scope="col-2">Eyes Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{characterInfo.name}</td>
                      <td>{characterInfo.birth_year}</td>
                      <td>{characterInfo.gender}</td>
                      <td>{characterInfo.height}</td>
                      <td>{characterInfo.skin_color}</td>
                      <td>{characterInfo.eye_color}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
        </div>
    )
};

export default PersonDetail;