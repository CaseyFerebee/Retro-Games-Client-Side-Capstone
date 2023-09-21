import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllConsoles } from "../../managers/ConsoleManager";

export const ConsoleList = () => {
  const [consoles, setConsoles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllConsoles().then((consoleData) => setConsoles(consoleData));
  }, []);

  const filteredConsoles = consoles.filter((console) =>
    console.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title is-1  has-text-white">Consoles</h1>

      <div className="has-text-centered">
        <div className="field" style={{ maxWidth: "300px", margin: "0 auto" }}>
          <input
            type="text"
            className="input"
            placeholder="Search for consoles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="columns is-multiline">
        {filteredConsoles.map((consoleObject) => (
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

