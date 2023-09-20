import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteControllerCollectionById, getControllerCollectionById, } from "../../../managers/ControllerCollectionManager";
import "./ControllerCollectionDetails.css";

export const ControllerCollectionDetails = () => {
  const [collectionController, setCollectionController] = useState([]);
  const { collectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getControllerCollectionById(collectionId).then(setCollectionController);
  }, [collectionId]);

  const handleDelete = () => {
    deleteControllerCollectionById(collectionId).then(() => {
      navigate(`/controllercollections`);
    });
  };

  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img
              src={collectionController?.controller?.img}
              alt={collectionController?.controller?.name}
              className="game-image is-large"
            />
            <h1 className="title is-1">{collectionController?.controller?.name}</h1>
            <p className="subtitle">{collectionController?.controller?.description}</p>
            <div className="columns">
              <div className="column">
                <p>
                  <strong>Release Date:</strong> {collectionController?.controller?.releaseDate}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Condition of Controller:</strong> {collectionController?.condition?.label}
                </p>
              </div>
            </div>
            <button
              className="button is-info is-fullwidth add-game-button"
              onClick={() => { navigate(`/controllercollections/${collectionId}/edit`); }}
            >
              Edit Controller in Collection
            </button>
            <button
              className="button is-danger is-fullwidth add-game-button"
              onClick={() => { handleDelete(); }}
            >
              Delete Controller from Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
