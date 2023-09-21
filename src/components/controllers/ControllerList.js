import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllControllers } from "../../managers/ControllerManager";

export const ControllerList = () => {
  const [controllers, setControllers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllControllers().then((controllerData) => setControllers(controllerData));
  }, []);

  // Filter the controllers based on the search term
  const filteredControllers = controllers.filter((controllerObject) =>
    controllerObject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title is-1  has-text-white">Controllers</h1>
      <div  className="field" style={{ maxWidth: "300px", margin: "0 auto" }}>
      <div className="has-text-centered">
        <input
          type="text"
          className="input"
          placeholder="Search controllers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>

      <div className="columns is-multiline">
        {filteredControllers.map((controllerObject) => (
          <div className="column is-one-third" key={controllerObject.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={controllerObject.img} alt={controllerObject.name} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4 has-text-centered">
                  <Link to={`/controllers/${controllerObject.id}`}>
                    {controllerObject.name}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
