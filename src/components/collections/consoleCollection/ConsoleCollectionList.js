import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCurrentOwnerConsoleCollection } from "../../../managers/ConsoleCollectionManager";

export const ConsoleCollectionList = () => {
  const [consoleCollections, setConsoleCollections] = useState([]);

  useEffect(() => {
    getCurrentOwnerConsoleCollection().then((consoleData) => setConsoleCollections(consoleData));
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1  has-text-white">Console Collection</h1>
      <div className="columns is-multiline">
        {consoleCollections.map((consoleObject) => (
          <div className="column is-one-third" key={consoleObject.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={consoleObject?.console?.img} alt={consoleObject?.console?.name} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">
                  <Link to={`/consolecollections/${consoleObject.id}`} className="has-text-centered">
                    {consoleObject?.console?.name}
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
