import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleConsole } from "../../managers/ConsoleManager";
import "./ConsoleDetails.css";

export const ConsoleDetails = () => {
  const [console, setConsole] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleConsole(id).then(setConsole);
  }, [id]);

  const handleAddToCollection = () => {
    navigate("/consolecollections/create", { state: { id: id } });
  };

  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img
              src={console.img}
              alt={console.name}
              className="console-image is-large"
              style={{ maxWidth: "500px" }}
            />
            <h1 className="title is-1">{console.name}</h1>
            <p className="subtitle">{console.description}</p>
            <div className="columns">
              <div className="column">
                <p>
                  <strong>Release Date:</strong> {console.releaseDate}
                </p>
              </div>
            </div>
            <button
              className="button is-info is-fullwidth add-console-button"
              onClick={handleAddToCollection}
            >
              Add Console to Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
