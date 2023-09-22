import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteGameCollectionById, getGameCollectionById } from "../../../managers/GameCollectionManager";
import "./GameCollectionDetails.css";

export const GameCollectionDetails = () => {
  const [collectionGame, setCollectionGame] = useState({});
  const { collectionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getGameCollectionById(collectionId).then(setCollectionGame);
  }, [collectionId]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this game from the collection?")) {
      deleteGameCollectionById(collectionId)
        .then(() => {
          window.alert("Game deleted successfully");
          navigate(`/gamecollections`);
        })
    }
  };

  return (
    <div className="container">
      <section className="hero is-medium"  style={{ backgroundColor: 'black' }}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <img
              src={collectionGame?.game?.img}
              alt={collectionGame?.game?.title}
              className="game-image is-large"
              style={{ maxWidth: "500px" }}
            />
            <h1 className="title is-1 has-text-white">{collectionGame?.game?.title}</h1>
            <p className="subtitle has-text-white">{collectionGame?.game?.description}</p>
            <div className="columns has-text-white">
              <div className="column">
                <p>
                  <strong className="has-text-white">Release Date:</strong> {collectionGame?.game?.releaseDate}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong className="has-text-white">Publisher:</strong> {collectionGame?.game?.publisher}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong className="has-text-white">Developer:</strong> {collectionGame?.game?.developer}
                </p>
              </div>
            </div>
            <div className="tags is-centered">
              <span className="tag is-info"  style={{ marginRight: '295px' }}>Modes of game: {collectionGame?.game?.modes}</span>
              <span className="tag is-success">Condition of Game: {collectionGame?.condition?.label}</span>
            </div>
            <button
              className="button is-info is-fullwidth add-game-button"
              onClick={() => { navigate(`/gamecollections/${collectionId}/edit`); }}
            >
              Edit Game in Collection
            </button>
            <button
              className="button is-danger is-fullwidth add-game-button"
              onClick={handleDelete}
            >
              Delete Game from Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

