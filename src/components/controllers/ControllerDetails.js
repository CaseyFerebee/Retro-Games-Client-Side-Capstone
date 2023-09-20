import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleController } from "../../managers/ControllerManager";
import "./ControllerDetails.css";

export const ControllerDetails = () => {
    const [controller, setController] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      getSingleController(id).then(setController);
    }, [id]);
  
    const handleAddToCollection = () => {
      navigate("/controllercollections/create", { state: { id: id } });
    };
  
    return (
      <div className="container">
        <section className="hero is-medium is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img
                src={controller.img}
                alt={controller.name}
                className="controller-image is-large"
                style={{ maxWidth: "500px" }}
              />
              <h1 className="title is-1">{controller.name}</h1>
              <p className="subtitle">{controller.description}</p>
              <div className="columns">
                <div className="column">
                  <p>
                    <strong>Release Date:</strong> {controller.releaseDate}
                  </p>
                </div>
              </div>
              <button
                className="button is-info is-fullwidth add-controller-button"
                onClick={handleAddToCollection}
              >
                Add Controller to Collection
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };
