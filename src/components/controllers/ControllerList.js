import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllControllers } from "../../managers/ControllerManager";

export const ControllerList = () => {
  const [controllers, setControllers] = useState([]);

  useEffect(() => {
    getAllControllers().then((controllerData) => setControllers(controllerData));
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1">Controllers</h1>
      <div className="columns is-multiline">
        {controllers.map((controllerObject) => (
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

