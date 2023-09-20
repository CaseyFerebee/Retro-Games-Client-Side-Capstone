import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleGame } from "../../managers/GameManager";
import "./GameDetails.css";

export const GameDetails = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleGame(gameId).then(setGame);
  }, [gameId]);

  const handleAddToCollection = () => {
    navigate("/gamecollections/create", { state: { gameId: gameId } });
  };

  return (
    <div className="container">
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img
              src={game.img}
              alt={game.title}
              className="game-image is-large"
              style={{ maxWidth: "500px" }}
            />
            <h1 className="title is-1">{game.title}</h1>
            <p className="subtitle">{game.description}</p>
            <div className="columns">
              <div className="column">
                <p>
                  <strong>Release Date:</strong> {game.releaseDate}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Publisher:</strong> {game.publisher}
                </p>
              </div>
              <div className="column">
                <p>
                  <strong>Developer:</strong> {game.developer}
                </p>
              </div>
            </div>
            <div className="tags is-centered">
              <span className="tag is-info">{game.modes}</span>
              <span className="tag is-success">{game.genre?.label}</span>
            </div>
            <button
              className="button is-info is-fullwidth add-game-button"
              onClick={handleAddToCollection}
            >
              Add Game to Collection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
