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
      <section className="hero is-medium" style={{ backgroundColor: 'black' }} >
        <div className="hero-body">
          <div className="container has-text-centered">
            <img
              src={game.img}
              alt={game.title}
              className="game-image is-large"
            />
            <h1 className="title is-1 has-text-white">{game.title}</h1>
            <p className="subtitle has-text-white">{game.description}</p>
            <div className="columns">
              <div className="column has-text-white">
                <p>
                  <strong className="has-text-white">Release Date:</strong> {game.releaseDate}
                </p>
              </div>
              <div className="column has-text-white">
                <p>
                  <strong className="has-text-white">Publisher:</strong> {game.publisher}
                </p>
              </div>
              <div className="column has-text-white">
                <p>
                  <strong className="has-text-white">Developer:</strong> {game.developer}
                </p>
              </div>
            </div>
            <div className="tags is-centered" style={{ marginTop: '10px' }}>
              <span className="tag is-info" style={{ marginRight: '295px' }}>Modes: {game.modes}</span>
              <span className="tag is-success" style={{ marginRight: '10px' }}>Genre: {game.genre?.label}</span>
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
