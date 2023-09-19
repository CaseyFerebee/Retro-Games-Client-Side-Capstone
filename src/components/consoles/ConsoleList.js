import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllConsoles } from "../../managers/ConsoleManager";

export const ConsoleList = () => {
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    getAllConsoles().then((consoleData) => setConsoles(consoleData));
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1">Consoles</h1>
      <div className="columns is-multiline">
        {consoles.map((consoleObject) => (
          <div className="column is-one-third" key={consoleObject.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={consoleObject.img} alt={consoleObject.name} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4 has-text-centered">
                  <Link to={`/consoles/${consoleObject.id}`}>
                    {consoleObject.name}
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

